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
    {name: "Greg Project 1", link:'https://imgix.ranker.com/user_node_img/50007/1000130881/original/good-guy-greg-on-scumbag-steve-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=500', description:'Look what he did'  },
    {name: "Greg Project 2", link: 'https://imgix.ranker.com/user_node_img/50007/1000130887/original/good-guy-greg-on-storytelling-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=500', description:'Look what he did'},
    {name: 'Scumbag Steve Project 1', link:'https://i.dailymail.co.uk/i/pix/2011/02/10/article-0-0D203DAD000005DC-312_468x469.jpg', description:'Look what he did'},
    {name: "Bad Luck Brian Project 1", link:'https://media.makeameme.org/created/escapes-a-burning-590cd1.jpg', description:'Look what he did' },
    {name: "Bad Luck Brian Project 2", link:'https://media.makeameme.org/created/start-coding-hello.jpg', description:'Look what he did'},
    {name: "Bad Luck Brian Project 3", link:'https://i.imgur.com/yTlx8.jpeg',description:'Look what he did'},
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

app.get("/pastprojects", (req, res) => {
  res.render("pastprojects.ejs", {
    projects:projects
  });
    
});

app.get("/pastprojects/:jobs", (req, res) => {
  const jobs = req.params.jobs;

  const specificJob = projects.filter(
    (project) => project.name === jobs);
  res.render("jobs.ejs", {
    jobs:jobs,
    specificJob: specificJob,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/links", (req, res) => {
  res.render("links.ejs");
});

app.listen(3000, console.log("Listening on 3000"));
