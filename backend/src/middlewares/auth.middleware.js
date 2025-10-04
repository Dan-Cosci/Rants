import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../models/user.model.js';

const Authorize = async (req, res, next) => {
  try {
    const u = new User();

    let header = req.headers.authorization;
    if (!header) return res.status(403).send("A token is required for authentication"); 

    // header has Bearer Token
    let token = header.split(" ")[1];
    if (!token) return res.status(403).send("A token is required for authentication");

    const decoded = jwt.verify(token, config.jwt.secretKey)
    if(!decoded || !decoded.id) res.status(401).json({success:false, message:"missing user Id"});
    
    const user = await u.findById(decoded.id);
    if (!user) return res.status(401).send("Invalid Token");
    
    req.user = user;
    console.log('Authorized user:', req.user.username, `(ID: ${req.user.id})`);
    next()

  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized access",
      error: error.message || "An error occurred"
    });
  }
};

export default Authorize;