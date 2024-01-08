const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userDataRoute = require("./routes/userDataRoute");
const connectDatabase = require("./config/database.js");
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(cors());
// console.log("object");
connectDatabase();
app.listen(process.env.PORT || 5000, () => {
  console.log(`running at port ${process.env.PORT}`);
});

app.use(userDataRoute);
