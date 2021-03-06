const express = require('express');
var apkUpdater = require('apk-updater');

var app = express()

apkUpdater.enable(app, '/anyUpdateServerRoute');
apkUpdater.enable(app, '/anyUpdateServerRoute', 'apks');

const port = 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
