// Start by npm init -y to create a json

// standard modules
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
// WITH ALL THESE "REQUIRE'S" ISN'T IT OBVIOUS THAT WE NEED IMPORTS AND IMMIGRANTS!
// IMMIGRATION REFORM IS 'REQUIRE'

// not always used, but good middleware
const morgan = require('morgan');

//importing our databases
const { TABLE1, TABLE2 } = require('./models')

// and let's get ready for routes / middleware
const app = express();

//virtuals
const wikiRouter = require('./routes/TABLE1');
const usersRouter = require('./routes/TABLE2');

// yea the next few lines i don't really get
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.set('views', __dirname + '/FOLDER(EX.=/VIEWS');

app.use(morgan('dev'));

// these I for sure don't know what they are doing, nor do I understand the docs. Just include them.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// THESE ALLOW MY SITE TO ACCESS FOLDERS ON MY LOCAL DRIVE
app.use(express.static(__dirname + '/folder'));

//VIRTUALS
app.use('/TABLE1', TABLE1Router);
app.use('/TABLE2', TABLES2Router);

// I'm brainfarting and what this is for. please update and lmk!
app.get('/', function(req, res) {
    res.render('/TABLE1');
});

// Error Handling STARTS with err (like a catch within Express)
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message); //something went wrong - internal Server
});

// let's update our databases with how we use our site
TABLE2.sync()
    .then(function() {
        return TABLE1.sync();
    })
    .then(function() {
        app.listen(3000, function() {
            console.log('Server is listening on port 3000')
        });
    });
// sometimes you'll want to do .sync({force: true}) in order to clear the table and update it with a new column

// for markdown. don't know if we need it for other things
var env = nunjucks.configure('views', { noCache: true });
var AutoEscapeExtension = require("nunjucks-autoescape")(nunjucks);
env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));



// EVERYTHING BELOW IS RANDOM NOTES. DON'T HAVE TO WASTE YOUR TIME LOOKING AT IT.

// // have res.render work with html files
// app.set('view engine', 'html');
// // when res.render works with html files, have it use nunjucks to do so
// app.engine('html', nunjucks.render);

//The morgan middleware can be used as many times as needed, enabling combinations like:

// Log entry on request and one on response
// Log all requests to file, but errors to console
// ... and more!
// Sample app that will log all requests to a file using Apache format, but error responses are logged to the console:
// log only 4xx and 5xx responses to console
// app.use(morgan('dev', {
//   skip: function (req, res) { return res.statusCode < 400 }
// }))