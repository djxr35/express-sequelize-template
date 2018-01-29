// You must first create a database! SO...
// go to your console and type createdb datbaseName
// then check it out in Postgres / Postico


// this allows us to use SQLize and stuff. DUH!
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/WHATEVER-DB-IS-CALLED ABOVE');

// don't know if we need to use markedown usually...
const marked = require('marked');

// model definition guidelines
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html
const TABLE1 = db.define('name', {
        friends: {},
        column2: {},
        column3: {},
        status: {},
    },
    // OPTIONS:
    // comprehensive lists: http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types

    // what we've used so far:
    // allowNull: false
    // unique: True
    // defaultValue: anything/false

    // type: Sequelize.STRING,
    // type: Sequelize.TEXT,
    // type: Sequelize.ENUM('open', 'closed')
    // type: Sequelize.ARRAY(Sequelize.TEXT),
    // validate below is a Sequelize check, not a database check like the above
    // validate: {
    //     something: true
    // }
    {
        hooks: {
            // beforeValidate:
        },
        getterMethods: {
            //put some virtuals here
            route: function() {
                // return '/WHATS-IT CALLED/' + this.urlTitle;
            },
        }
    });

HOOKS - MODERN METHOD
TABLE.hook('hook method',
    function)
return TABLE.SQLIZEMETHOD({
    where: {}
});


// INSTANCE METHOD
Page.findByTag = function(tag) {
    // return Page.findAndCountAll({
    return Page.findAll({
        where: {
            tags: {
                $overlap: [tag]
            }
        }
    });
}

// CLASS METHOD
Page.prototype.findSimilar = function() {
    return Page.findAll({
        // Did i just copy this from wikistacks!?
        // it's nOtEs! not cheating!!
        where: {
            tags: {
                $overlap: this.tags
            },
            id: {
                $ne: this.id
            }
        }
    })
}

// if you don't know that this is creating our second table, then go back to line 1
const TABLE2 = db.define('name', {
    column1: {},
})

// ASSOCIATION - let's create a relationship (platonic, for less drama) between our tables.
CHILD.belongsTo(PARENT, { as: 'ALIAS' });
// TABLE1.belongsTo(TABLE2)
// allows for childExample.setParent(id)
// and childExample.getParent()
// IN THIS EXAMPLE:
// PARENT.prototype.addChild = function(parent) {
//     let parentId = this.id
//     return PARENT.create(
//             parent
//         )
//         .then(function(child) {
//             return child.setParent(parentId)
//         })
// };

// in order to use them elsewhere, lets ship them internationally!
module.exports = {
    TABLE1: TABLE1,
    TABLE2: TABLE2,
}

// AND GOODLUCK!