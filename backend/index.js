const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log("Server is listening to", PORT);
});
