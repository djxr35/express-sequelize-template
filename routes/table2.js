const express = require('express');
const router = express.Router();
const { TABLE1, TABLE2 } = require('../models/');
const Promise = require('bluebird');

module.exports = router;

router.get('/', (req, res, next) => {
    TABLE2.findAll()
        // or findAll({
        //     where: {
        //         authorId: req.params.userId
        //     }
        // })
        .then(column => {
            res.render('column', {
                column: column
            });
        })
        .catch(next);
});


router.get('/:id', (req, res, next) => {
    let findSomething = Table.findAll({
        where: {
            key: req.params.id
        }
    });

    let findMatchingSomething = Table.findById(req.params.id);

    Promise.all([findSomething, findMatchingSomething])
        .then(values => { // could've used .spread
            let value0 = values[0];
            let value1 = values[1];

            table.column = column;
            res.render('something', {
                column: column
            })
        })
        .catch(next);
})

router.post('/tables1', function(req, res, next) {
    Table1.create(req.body)
        .then(function(created) {
            res.json({
                message: 'YOU ROCK BRO',
                table: created
            });
        })
        .catch(next);
});