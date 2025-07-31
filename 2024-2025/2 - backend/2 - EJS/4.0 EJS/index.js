
import express from 'express';


const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

var type = "a weekday";
var advice = "it's time to work hard!";



if (day == 0 || day == 6){
        type = "a weekend";
        advice = "it's time to have some fun!";
    }

app.get("/", (req, res) => {
    res.render("index.ejs", 
        {
            dayType: type,
            adv: advice,

        }
    )
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});









// import express from 'express';


// const app = express();
// const port = 3000;

// var weekend = 0;

// const d = new Date();
// let day = d.getDay();

// app.use(checkDay);

// function checkDay(req, res, next){
//     console.log(day);

//     if (day == 0 & day == 6){
//         weekend = 1;
//     }
//     else if (day > 0 && day < 6){
//         weekend = 0;
//     }

//     next();
// }

// app.get("/", (req, res) => {
//     if (weekend == 1){
//         res.send("<h1>Hey! It's a weekend, it's time to have fun! </h1>")
//     }
//     else {
//         res.send("<h1>Hey! It's a weekday, it's time to word hard! </h1>")
//     }
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });