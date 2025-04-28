/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

// const prompt = inquirer.createPromptModule();
inquirer
  .prompt([
    {
      name: "domainName",
      message: "What is your domain name?",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers.domainName);

    var qr_svg = qr.image(answers.domainName, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));

    fs.writeFile("user-input.txt", answers.domainName, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
