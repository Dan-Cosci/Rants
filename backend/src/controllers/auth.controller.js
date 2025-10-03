import jwt from "jsonwebtoken";
import bycrpt from 'bcrypt';

import config from "../config/config.js";
import db from "../services/database.js";
import { hashPassword, comparePassword }from "../services/hash.js";

import User from "../models/user.model.js";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    // Start transaction
    await db.beginTransaction();

    // Execute query (no callback, just await)
    const user = new User({ username, email, password: hashedPassword });
    const newUser = await user.save();
    const token = jwt.sign({ id: newUser.insertId }, config.jwt.secretKey, { expiresIn: config.jwt.expiresIn });

    // Commit transaction
    await db.commit();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: newUser,
        token
      }
    });
  } catch (err) {
    // Rollback if error
    await db.rollback();

    // Duplicate entry error (MySQL error code: ER_DUP_ENTRY = 1062)
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        message: "Username or email already exists"
      });
    }

    console.error("SignUp error:", err.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong during signup"
    });
  }
};
  
export const SignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required."
    });
  }

  try {
    // Fetch user by email
    const user = new User()
    const signUser = await user.findByEmail(email);

    if (!signUser.email) {
      return res.status(401).json({ success: false, message: "Email does not exist." });
    }

    // Compare password
    const valid = await bycrpt.compare(password,signUser.password);
    if (!valid) {
      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    // Generate JWT (make sure your model has `id` or `user_id`)
    const token = jwt.sign(
      { id: signUser.id || signUser.user_id },
      config.jwt.secretKey,
      { expiresIn: config.jwt.expiresIn }
    );

    res.status(200).json({
      success: true,
      message: "User login successful",
      data: {
        user: signUser,
        token
      }
    });
  } catch (error) {
    console.error("SignIn error:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong during sign in"
    });
  }
};


export const SignOut = async (req, res) => {};