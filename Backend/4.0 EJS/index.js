import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
var isWeekend;
const __dirname = dirname(fileURLToPath(import.meta.url));

function getDay(req, res, next) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  console.log(`d : ${d} day : ${day} d.getDay() : ${d.getDay()}`);
  if (d.getDay() == 0 || d.getDay() == weekday.length - 1) {
    isWeekend = true;
  } else {
    isWeekend = false;
  }
  next();
}

app.use(getDay);
app.get("/", (req, res) => {
  if (isWeekend) {
    res.render("index.ejs", {
      day: "It's the weekend",
      advice: "it's time to have fun!",
    });
  } else {
    res.render("index.ejs", {
      day: "It's a weekday",
      advice: "it's time to work hard!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
