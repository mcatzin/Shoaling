const app = require("express")();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ patth: "./config.env" });
const connectDb = require("./utilServer/connectDb");
const PORT = process.env.PORT || 3000;
connectDb();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT),
    (err) => {
      if (err) throw err;
      console.log(`Express server running on ${Port}`);
    };
});
