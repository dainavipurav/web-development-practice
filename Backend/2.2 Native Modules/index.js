const fs = require("fs");
// fs.writeFile("message1.txt", "Hello from node!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
