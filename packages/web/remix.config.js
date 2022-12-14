/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "dist/index.js",
  publicPath: "/dist/",
  serverBuildTarget: "node-cjs",
};
