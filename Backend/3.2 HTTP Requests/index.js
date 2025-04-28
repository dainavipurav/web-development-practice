import express from "express";

var app = express();
const port = 6000;

app.listen(port, () => {
  console.log(`Server is running on ${port} port.`);
});
