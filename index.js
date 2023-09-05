const fs = require("fs");

function justinjeong() {
  fs.readFile("./info.json", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}

module.exports = justinjeong;
