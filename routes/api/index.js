const router = require('express').Router();
const userRoutes = require('./user-routes');

// add prefix of `/user` to routes created in `user-routes.js`
router.use('/users', userRoutes);

module.exports = router;