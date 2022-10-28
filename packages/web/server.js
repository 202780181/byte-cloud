const { createRequestHandler } = require("@remix-run/node")
import * as build from "@remix-run/dev/server-build";

export const app = createRequestHandler({build, mode: process.env.NODE_ENV})
