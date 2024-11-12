const express = require("express");
const app = express();

const welcomeMessage =
  "Welcome to Memecorp, the best place to hire famous Meme People for taks.";
const historyTxt =
  "This company has a history, the best history, a long history of doing stuff for people. I promise. Do not think about it too much.";
const staffData = [
  { name: "Good Guy Greg", title: "CEO of Goodness", hireDate: 2011, phone:"555-555-1234", email:"ggg@memecorp.gov" },
  { name: "Scumbag Steve", title: "Chief Scumbag", hireDate: 2011, phone:"Don't Call Me, PEASANT", email:"not client facing, buzz off"},
  { name: "Bad Luck Brian", title: "Eternal Intern", hireDate: 2012, phone:" 555-555-1235 ext: 0", email:"theOnlyWorkingEmployee@memecorp.gov" },
];

const projects = [
    {name: "Greg Project 1", link:'../images/Greg1.jpeg'  },
    {name: "Greg Project 2", link: '../images/Greg2.jpeg'},
    {name: 'Scumbag Steve Project 1', link:' ../images/steve.png'},
    {name: "Bad Luck Brian Project 1", link:'../images/brian1.webp' },
    {name: "Bad Luck Brian Project 2", link:'../images/brian2.webp'},
    {name: "Bad Luck Brian Project 3", link:'../images/brian3.jpg'},
]

app.get("/", (req, res) => {
  res.render("home.ejs", {
    msg: welcomeMessage,
  });
});

app.get("/staff", (req, res) => {
  res.render("staff.ejs", {
    staffData: staffData,
  });
});

app.get("/staff/:name", (req, res) => {
  const name = req.params.name;

  const employeePage = staffData.filter(
      (member) => member.name === name);
      res.render("name.ejs", {
    name:name,
    employeePage: employeePage,
  });
});

app.get("/history", (req, res) => {
  res.render("history.ejs", {
    msg: historyTxt,
  });
});

app.get("/pastwork", (req, res) => {
  res.render("pastwork.ejs");
});

app.get("/pastwork/:jobs", (req, res) => {
  const jobs = req.params.jobs;
  res.render("jobs.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/links", (req, res) => {
  res.render("links.ejs");
});

app.listen(3000, console.log("Listening on 3000"));
