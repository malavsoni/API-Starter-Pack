const mongoose = require("mongoose");

module.exports = function () {
  const result = mongoose.connect("mongodb://localhost/app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  result
    .then((response) => {
      console.log("Connection Established" + response);
    })
    .catch((error) => {
      console.log("Failed to connect with error " + error);
    });
};
