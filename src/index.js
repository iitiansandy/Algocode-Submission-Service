const fastify = require('fastify')({ logger: true });
const app = require('./app');

// fastify.get('/ping', (req, res) => {
//     // controller function
//     res.send({ data: "pong"});
// });

fastify.register(app);

const port = 3000;

fastify.listen({ port: 3000}, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    };
    console.log('Server is running on port', port);
})