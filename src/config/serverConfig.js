const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    REDIS_PORT: process.env.REDIS_PORT || '6379',
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1'
};