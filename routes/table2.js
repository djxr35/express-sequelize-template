const express = require('express');
const router = express.Router();
const { TABLE1, TABLE2 } = require('../models/');
const Promise = require('bluebird');

module.exports = router;

router.get('/', (req, res, next) => {
    TABLE2.findAll()
        .then(column => {
            res.render('column', {
                column: column
            });
        })
        .catch(next);
});


router.get('/:userId', (req, res, next) => {
    let findingUserPages = Page.findAll({
        where: {
            authorId: req.params.userId
        }
    });

    let findingUser = User.findById(req.params.userId);

    Promise.all([findingUserPages, findingUser])
        .then(values => { // could've used .spread
            let pages = values[0];
            let user = values[1];

            user.pages = pages;

            res.render('userpage', {
                user: user
            })
        })
        .catch(next);
})