//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from 'express';

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/public/index.html");
})

app.use(secretCheck);

function secretCheck(req, res, next){
    console.log(req.body.password);
    if (req.body.password == 'ILoveProgramming'){
        next();
    }
    else{
        console.log("Wrong Password!");
        res.sendFile(__dirname + "/public/index.html");
    }
}

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});