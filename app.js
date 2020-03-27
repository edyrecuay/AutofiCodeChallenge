var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var mongoMemoryServer = require('mongodb-memory-server');
var routes = require("./routes/routes.js");

app.use(routes);

const mongoServer = new mongoMemoryServer.MongoMemoryServer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoMemoryServer.Promise = Promise;
mongoServer.getConnectionString().then((mongoUri) => {

    const mongooseOpts = {

        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
    mongoose.connect(mongoUri, mongooseOpts);
    mongoose.connection.on('error', (e) => {

        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
            mongoose.connect(mongoUri, mongooseOpts);
        }
        console.log(e);
    });
    mongoose.connection.once('open', () => {
        console.log(`MongoDB is successfully connected to ${mongoUri}`);
    });
});


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

