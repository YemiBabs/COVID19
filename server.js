var express = require("express"),
    app = express();
const connectDB = require('./DB/Connection');

connectDB();

app.use(express.json({ extended :false}));
app.use('/api/userModel',require('./Api/User'))




var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log("Listening on port ", port);


require("cf-deployment-tracker-client").track();


