const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medchime", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/api-routes")(app);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
