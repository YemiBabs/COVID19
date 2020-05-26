var express = require('express');
var app= express();


var port = process.env.PORT || 8080;


app.use(express.static(__dirname+"/public"));
app.listen(port);
console.log('server listening on port: ' + port);


//require("cf-deployment-tracker-client").track();