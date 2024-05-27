const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');

async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));

    fastify.register(servicePlugin);

    // Registering the test routes
    fastify.register(require('./routes/api/apiRoutes'), { prefix: "/api" });

    

};

module.exports = fastifyPlugin(app);