const jwt = require('jsonwebtoken');

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const verifyToken = async (req, res, next) => {
  try {
    // Mengambil header Authorization dari request
    const authHeader = req.headers['authorization'] || '';

    // Memeriksa format header Authorization
    if (authHeader.split(' ').length !== 2) {
      return res.status(401).json({
        message: 'Invalid token',
        data: null,
      });
    }

    // Mengambil token dari header Authorization
    const token = authHeader.split(' ')[1];
    
    // Memverifikasi token
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      return res.status(401).json({
        message: 'Invalid token',
        data: null,
      });
    }

    // Menyimpan informasi pengguna yang terdecode ke dalam objek request
    req.user = user;

    // Melanjutkan ke middleware berikutnya
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({
        message: 'Invalid token',
        data: null,
      });
    }

    // Menangani kesalahan lainnya
    next(err);
  }
};

module.exports = { verifyToken };
