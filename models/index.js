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
const TABLE1 = db.define('table1', {
        column1: {},
        column2: {},
        column3: {},
    },
    // OPTIONS:
    // comprehensive lists: http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types

    // what we've used so far:
    // allowNull: false
    // unique: True
    // defaultValue: anything/false
    // validate below is a Sequelize check, not a database check like the above
    // validate: {
    //     something: {
    // someArgument : someArgumentValue
    // }
    // }

    // type: Sequelize.STRING,
    // type: Sequelize.TEXT,
    // type: Sequelize.ENUM('open', 'closed')
    // type: Sequelize.ARRAY(Sequelize.TEXT),

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

// HOOKS - MODERN METHOD
TABLE.hook('hook method',
    function() {
        return TABLE.SQLIZEMETHOD({
            where: {}
        })
    });


// INSTANCE METHOD
Table.METHOD = function(tag) {
    // return Page.findAndCountAll({
    return Table.findAll({
        where: {

        }
    });
}

// CLASS METHOD
Table.prototype.METHOD = function() {
    return Table.findAll({
        where: {

        }
    })
}


// SEQUELIZE CRUD
Table.delete = function() {
    return this.destroy({
        where: {
            someKey: hasSomeValue
        }
    });
}

Table.modify = function(table) {
    return this.update({
        key: hasNewValue //updatedInfo
    }, {
        where: { condition: isMet }
    });
}

Table.prototype.add = function(table) {
    let parentId = this.id
    return Table.create(
            table // new instance / row; could easily have been
            // .create({
            //    someKey : someValue,
            //    anotherKey: anotherValue
            // })
        )
        .then(function(child) {
            return child.setParent(parentId)
        })
};
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