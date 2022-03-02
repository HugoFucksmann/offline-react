const express = require("express");

const cors = require("cors");

const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log("server iniciado en puerto ", PORT);
});
