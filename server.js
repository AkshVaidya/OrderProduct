const http = require("http");
const app = require("./app");
const port = 4000;
const server = http.createServer(app);
server.listen(port||`0.0.0.0`);
