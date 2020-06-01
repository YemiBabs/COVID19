const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0-z4eaq.mongodb.net/test?retryWrites=true&w=majority"


const connectDB =async() =>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser: true
    })
    .catch(err => {
        console.log(err);
    });
    console.log('db connect..');
}
module.exports =connectDB;