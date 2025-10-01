
// Simple in-memory user dataset for demonstration.
// Replace this with database calls in a real application.
const USERS = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];

export async function getUsers(req, res) {
  try {
    return res.status(200).json({ data: USERS });
  } catch (err) {
    console.error('getUsers error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = USERS.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    console.error('getUserById error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}