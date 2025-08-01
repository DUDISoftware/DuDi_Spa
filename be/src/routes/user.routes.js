import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import User from '../models/user.model.js';
import { updateProfile } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userData.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Không thể lấy thông tin người dùng' });
  }
});


router.put('/profile', verifyToken, updateProfile); 

export default router;
