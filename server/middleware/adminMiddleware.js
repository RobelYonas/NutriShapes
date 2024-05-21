const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'nutrishape'

const adminMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;

        const user = await User.findById(req.user.userId);
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied, admin only' });
        }

        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = adminMiddleware;
