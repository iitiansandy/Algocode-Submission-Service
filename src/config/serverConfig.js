const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongoDbUrl: process.env.MONGO_DB_URL,
    REDIS_PORT: process.env.REDIS_PORT || '6379',
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    PROBLEM_ADMIN_SERVICE_URL: process.env.PROBLEM_ADMIN_SERVICE_URL
};