const express = require("express");
const app = express();
app.use(express.static("out"));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(__dirname + "out/index.html");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
