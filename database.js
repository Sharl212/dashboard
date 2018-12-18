const mongoose = require('mongoose');
const uri = "mongodb://admin:admin123@ds237574.mlab.com:37574/objectwheel-dashboard";

mongoose.connect(uri, {useNewUrlParser: true}, (err) => {
    if(err) return console.log("err :: ", err)
    console.log("Connected to DB..")
});