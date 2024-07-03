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

// render the new post form page
router.get('/newBlogPost', withAuth, (req, res) => {
  res.render('newBlogPost', {
    logged_in: req.session.logged_in,
  });
});

// render the edit post form page
router.get('/editPost/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('editPost', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;