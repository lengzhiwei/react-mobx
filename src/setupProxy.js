const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://api01.6bqb.com",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};