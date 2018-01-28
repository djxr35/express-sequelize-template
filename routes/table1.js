const express = require('express');
const router = express.Router();
const { TABLE1, TABLE2 } = require('../models/');

module.exports = router;

router.get('/', (req, res, next) => {
    TABLE2.findAll({})
        .then((theTABLE2) => {
            res.render('index', {
                thetables: theTABLE2
            });
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    TABLE2.findOrCreate({
            where: {
                COLUMN1: req.body.somethingCOLUMN1,
                COLUMN2: req.body.somethingCOLUMN2,
            }
        })
        .spread((table2, wasCreatedBool) => {

            return TABLE1.create({
                    COLUMN1: req.body.column1,
                    COLUMN2: req.body.column2,
                    COLUMN3: req.body.column3,
                })
                .then((createdX) => {
                    return createdX.setSOMETHING(table2) //set whatever something was above
                        //create the relative/association
                });
        })
        .then(createdX => {
            res.redirect(createdX.route)
        })
        .catch(next);

    // BUILD is not async and does not update database
    // it requires a .save()
    // CREATE DOES BOTH TOGETHER AND THUS IS ASYNC

    // let something = TABLE.build({
    //     COLUMN1: req.body.somethingCOLUMN1,
    //     COLUMN2: req.body.somethingCOLUMN2
    // })
    // something.save()
    //     .then((savedSomething) => {
    //         console.log(savedSomething)
    //     })
    //     .catch(next);

    // Create is build & save built into 1
    // let newPage = Page.build(req.body);
    // newPage.save()
    //     .then(() => {
    //         // console.log('Page was saved successfully!')
    //         res.redirect('/wiki/' + newPage.urlTitle)
    //     })
    //     .catch((err) => {
    //         next(err)
    //     });
    // Page.build({
    //     column: req.body.column,
    //     anothercolumn: req.body.anothercolumn,
    // });
    // console.log(req.body)
});

router.get('/SOMEPAGE', (req, res) => {
    res.render('THE...HTML OF SOMEPAGE');
});


router.get('/search/:tag', (req, res, next) => {
    Page.findByTag(req.params.tag)
        .then(pages => {
            res.render('index', {
                pages: pages
            });
        })
        .catch(next);
})

router.get('/:somePARAM', (req, res, next) => {
    let descriptiveTITLEofSOMEparam = req.params.somePARAM;

    TABLE.findOne({
            where: {
                column: descriptiveTITLEofSOMEparam
            }
        })
        .then(table => {
            if (table === null) {
                return next(new Error('That page was not found!'))
                    // erro.status = 404; throw error;
            }
            return table.getSOMETHING()
                .then((something) => {
                    table.something = something;
                    res.render('.HTML of WHAT WE ARE LOOKING FOR', {
                        ITEM: ITEM
                    })
                })
        })
        .catch(next);
})


router.get('/:urlTitle/function', (req, res, next) => {
    let descriptiveTITLEofSOMEparam = req.params.somePARAM;

    Page.findOne({
            where: {
                urlTitle: urlTitleOfAPage
            }
        })
        .then(page => {
            if (page === null) {
                return next(new Error('That page was not found!'))
            }
            return page.findSimilar();
        })
        .then(similarPages => {
            res.render('index', {
                pages: similarPages
            })
        })
        .catch(next)
})