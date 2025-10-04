import User from "../models/user.model.js";

export async function getUsers(req, res) {
  try {
    const u = new User();
    const users = await u.getUsers();

    return res.status(200).json({success:true, data: users });
  } catch (err) {
    console.error('getUsers error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getUserById(req, res) {
  try {
    const u =  new User();
    const { id } = req.params;
    console.log(id)
    const user = await u.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    console.error('getUserById error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}