const express = require('express');
// const viewsController = require('../controllers/viewsController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The hiker',
    user: 'jo',
  });
});

router.get('/overview', (req, res) => {
  res.status(200).render('overview', {
    title: 'The forest hiker',
  });
});

router.get('/tour', (req, res) => {
  res.status(200).render('tour', {
    title: 'The hiker',
  });
});

// router.get('/', authController.isLoggedIn, viewsController.getOverview);
// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
// router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/me', authController.protect, viewsController.getAccount);

// router.post(
//   '/submit-user-data',
//   authController.protect,
//   viewsController.updateUserData
// );

module.exports = router;
