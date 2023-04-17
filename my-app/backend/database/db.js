const mongoose = require('mongoose');
const uri = "mongodb+srv://tbaba808:<password>@cluster0.crgbuj2.mongodb.net/?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
        })
        console.log("Connected to db");
    } catch (e) {
        console.log(e);
        throw(e);
    }
}

module.exports = InitiateMongoServer;

