import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// function bandNameGenerator(req, res, next) {
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameGenerator);

app.use(bodyParser.urlencoded({extended:true}))

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Band Name is : </h1><br><h2> ${req.body.street} ${req.body.pet} </h2>`)
})

app.get("/", (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
