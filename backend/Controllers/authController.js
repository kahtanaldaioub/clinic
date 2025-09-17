import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

// Register
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let existingUser = null;

    if (role === 'patient') {
      existingUser = await User.findOne({ email });
    } else if (role === 'doctor') {
      existingUser = await Doctor.findOne({ email });
    }

    // check if user exists
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    let newUser;
    if (role === 'patient') {
      newUser = new User({
        name,
        email,
        password: hashPassword,
        role,
        photo,
        gender,
      });
    } else if (role === 'doctor') {
      newUser = new Doctor({
        name,
        email,
        password: hashPassword,
        role,
        photo,
        gender,
      });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid role' });
    }

    await newUser.save();

    res.status(201).json({ success: true, message: 'User successfully created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error, try again' });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }) || await Doctor.findOne({ email });

    // check if user exists
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Wrong password' });
    }

    // get token
    const token = generateToken(user);

    const { password: pwd, ...rest } = user._doc;

    return res.status(200).json({
      success: true,
      message: 'Successfully logged in',
      token,
      data: rest,
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to login' });
  }
};
