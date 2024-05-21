const { resolve } = require("path");

function parseBody(req, callback) {
    return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      callback(null, body);
    });
    });
}

module.exports = parseBody;