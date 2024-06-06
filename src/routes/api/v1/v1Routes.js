
async function v1Plugin (fastify, options) {
    fastify.register(require('./test/testRoute'), {prefix: '/test'});
    fastify.register(require('./submissionRoutes'), {prefix: '/submissions'});

}

module.exports = v1Plugin;