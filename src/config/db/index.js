const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev',{
            // useNewUrlParser : true,  // This will create a new URL parser instance instead of the default one.
            // useUnifiedTopology: true
        })
        console.log("MongoDB Connected...")
    } catch (error) {
        console.log('Connect db failure...')   
    }
}

module.exports = {connect}