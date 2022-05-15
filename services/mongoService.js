const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost/nodejs-login-app-v2';

const mongoConnect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            return console.log(`Mongoose - Connection Error: ${MONGO_URI}`);
        }
        console.log(`Mongoose - Connection established at ${MONGO_URI}`);
    });
}

module.exports = {
    mongoConnect: mongoConnect
}
