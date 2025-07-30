import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/about", (req, res) => {
  res.send("This page is all about me!")
})

app.get("/phone", (req,res) => {
  res.send("My phone is 1234-567-8900")
})


// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
