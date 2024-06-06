const fastify = require('fastify')({ logger: true });
const app = require('./app');
const serverConfig = require('./config/serverConfig');

// fastify.get('/ping', (req, res) => {
//     // controller function
//     res.send({ data: "pong"});
// });

fastify.register(app);



fastify.listen({ port: serverConfig.port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    };
    console.log('Server is running on port', serverConfig.port);
})