(function () {

    var express = require('express');
    var inchi = require('./inchi.js');

    var app = express();

    app.use("/", inchi);

    app.listen(4901);

}());
