const serverless = require('@serverless-devs/fc-http');

const app = require('./packages/web/server.js');

exports.handler = serverless(app);
