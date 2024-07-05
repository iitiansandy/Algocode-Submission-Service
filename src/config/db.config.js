const mongoose = require('mongoose');
const { mongoDbUrl } = require('./serverConfig');

function connectToDB () {
    try {
        mongoose.connect(mongoDbUrl);
    } catch (error) {
        console.log("Unable to connect to database");
        return error;
    };
};

module.exports = { connectToDB };
