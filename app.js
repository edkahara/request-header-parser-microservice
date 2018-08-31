var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/headers", function(req, res) {
    var ipaddress = req.headers['x-forwarded-for'].split(',')[0];
    var language = req.headers['accept-language'];
    var software = req.headers['user-agent'];
    res.json({ipaddress: ipaddress, language: language, software: software});
});//get ip address, language and software

app.listen(3000);
