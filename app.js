const express = require("express");
const app = express();
const route = require("./routes/tasks");
const conncetDB = require("./model/db");
const notFound = require("./middleware/not-found");
const { all } = require("./routes/tasks");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1/tasks", route);
app.use(express.static("./view"));

app.use("*", notFound);

const startApp = async () => {
  try {
    await conncetDB();
    app.listen(PORT, () => {
      console.log(`SERVER IS LISTING AT PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
