
async function v1Plugin (fastify, options) {
    fastify.register(require('./test/testRoute'), {prefix: '/test'});

}

module.exports = v1Plugin;