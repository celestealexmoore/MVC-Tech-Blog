const router = require('express').Router();
//const { Song, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/homepage', async (req, res) => {
    try {
        res.render('homepage', {
            style: 'main.css',
            title: "Tech Blog"
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {
            style: 'dashboard.css',
            title: "My Dashboard"
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logout', async (req, res) => {
    try {
        res.render('logout', {
            style: 'logout.css',
            title: "My Profile"
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;