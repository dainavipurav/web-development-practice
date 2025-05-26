import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  var type = "",
    participants = "";
  if (req.body) {
    if (req.body.type) {
      type = req.body.type;
    } else {
      type = "";
    }
    if (req.body.participants) {
      participants = req.body.participants;
    } else {
      participants = "";
    }
  }

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
  try {
    const response = await axios.get(
      "https://bored-api.appbrewery.com/filter",
      {
        params: {
          type: type,
          participants: participants,
        },
      }
    );
    const result = response.data;
    console.log("result length : " + result.length);
    var randomNumber;
    if (result) {
      randomNumber = Math.floor(Math.random() * result.length);
    }

    console.log("randomnum : " + randomNumber);

    console.log("Result : " + result);
    res.render("index.ejs", { data: result[randomNumber] });
  } catch (error) {
    console.error("Error occurred:", error.status);

    console.error("Failed to make request:", error.message);
    var errorMessage = error.message;

    if (error.status === 404) {
      errorMessage = "No activities that match your criteria.";
    }
    res.render("index.ejs", {
      error: errorMessage,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
