const fastify = require('fastify')({ logger: true });
const app = require('./app');
const { connectToDB } = require('./config/db.config');
const serverConfig = require('./config/serverConfig');

// fastify.get('/ping', (req, res) => {
//     // controller function
//     res.send({ data: "pong"});
// });

fastify.register(app);



fastify.listen({ port: serverConfig.port }, async (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    };

    await connectToDB();
    console.log('Server is running on port', serverConfig.port);
})