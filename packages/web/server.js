const { createRequestHandler } = require("@remix-run/node")
import * as build from "@remix-run/dev/server-build";

module.exports = createRequestHandler({build, mode: process.env.NODE_ENV})
