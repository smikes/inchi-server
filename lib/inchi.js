(function () {
    'use strict';

    var inchi = require('inchi');

    module.exports = function handler(req, res) {
        var p = req.path.slice(1),
            m;

        inchi.inchilib.GetStructFromINCHI(p, function (err, m) {
            res.set("ETag", p);
            res.send(err ? err : m);
        });
    };

}());
