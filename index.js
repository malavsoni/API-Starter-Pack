const app = require("express")();

const PORT = process.env.PORT || 3000;

require("./startup/routes")(app);
require("./startup/database")();
require("./startup/validation")();

app.listen(PORT, () => {
  console.log("Listening to " + PORT);
});
