const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
// const dogRoutes = require('./api/dog-routes');
// const mealRoutes = require('./api/meal-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/api/dog', dogRoutes);
// router.use('/api/meal', mealRoutes);

module.exports = router;