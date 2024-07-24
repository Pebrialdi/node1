const { user: UserModel } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Create a new user
    const user = await UserModel.create({
      name,
      email,
      password: passwordHash,
    });

    if (!user) {
      return res.status(500).json({
        message: 'Failed to register user',
        data: null,
      });
    }

    return res.status(201).json({
      message: 'User successfully registered',
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({
      attributes: ['id', 'name', 'email', 'password'],
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
        data: null,
      });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid email or password',
        data: null,
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    return res.json({
      message: 'User successfully logged in',
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
