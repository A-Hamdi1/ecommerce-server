const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');

const validateRegister = [
  check('username').not().isEmpty().withMessage('Username is required').bail().custom(async (username) => {
    const user = await User.findOne({ username });
    if (user) {
      return Promise.reject('Username is already in use');
    }
  }),
  check('email').isEmail().withMessage('Please include a valid email').bail().custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject('Email is already in use');
      }
    }),
  check('phoneNumber').isNumeric().withMessage('Phone number must be numeric').bail().custom(async (phoneNumber) => {
    const user = await User.findOne({ phoneNumber });
    if (user) {
      return Promise.reject('Phone number is already in use');
    }
  }),
  check('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
];

const validateLogin = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
];

const validateForgotPassword = [
  check('email', 'Please include a valid email').isEmail(),
];

const validateResetPassword = [
  check('resetToken', 'Reset token is required').not().isEmpty(),
  check('newPassword', 'Password must be at least 8 characters').isLength({ min: 8 }),
];

const validateUpdateProfile = [
  check('username', 'Username is required').optional().not().isEmpty(),
  check('email', 'Please include a valid email').optional().isEmail(),
  check('password', 'Password must be at least 8 characters').optional().isLength({ min: 8 }),
];

module.exports = { validateRegister, validateLogin, validateForgotPassword, validateResetPassword, validateUpdateProfile };