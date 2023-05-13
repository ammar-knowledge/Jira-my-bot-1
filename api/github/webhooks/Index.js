// api/github/webhooks/index.js

const { createNodeMiddleware, createProbot } = require("probot");

const app = require("../../../index");

module.exports = createNodeMiddleware(app, {

  probot: createProbot(),

  webhooksPath: "/api/github/webhooks",

});

  



  
