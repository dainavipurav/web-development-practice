//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var pageUrl;

app.use(bodyParser.urlencoded({ extended: true }));

function checkAndValidatePassword(req, res, next) {
  console.log(req.body);
  if (req.body["password"] === "ILoveProgramming") {
    console.log(true);
    pageUrl = "/public/secret.html";
  } else {
    console.log(false);
    pageUrl = "/public/index.html";
  }
  next();
}

app.use(checkAndValidatePassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  res.sendFile(__dirname + pageUrl);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
