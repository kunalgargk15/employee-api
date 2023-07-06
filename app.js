const express = require("express");
const dbConnect = require("./dbConnect");
const Employee = require("./empModel");
const routes = require("./routes");
const app = express();

dbConnect();

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is up running on 3000!");
});
