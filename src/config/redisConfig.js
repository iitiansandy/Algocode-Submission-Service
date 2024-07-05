const redis = require('ioredis');

const serverConfig = require('./serverConfig');

const redisConfig = {
    port: serverConfig.REDIS_PORT,
    host: serverConfig.REDIS_HOST,
    maxRetriesPerRequest: null
};

const redisConnection = new redis(redisConfig);

module.exports = redisConnection;