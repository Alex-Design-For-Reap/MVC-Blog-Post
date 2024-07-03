// controllers/dashboardRoutes.js
const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for the user for dashboard page
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      posts,
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render the new post page
router.get('/newBlogPost', withAuth, (req, res) => {
  res.render('newBlogPost', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;