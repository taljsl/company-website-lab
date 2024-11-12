const express = require ('express')
const app = express()

app.get('/', (req,res) => {
    res.render("home.ejs")
})

app.get('/staff', (req,res) => {
    res.render('staff.ejs')
})

app.get('/staff/:name', (req,res) => {
    const name = req.params.name

    res.render('name.ejs')
})

app.get('/history',(req,res) => {
    res.render('history.ejs')
})


app.get('/pastwork', (req,res) => {
    res.render('pastwork.ejs')
})

app.get('/pastwork/:jobs', (req,res) => {
    const jobs = req.params.jobs
    res.render('jobs.ejs')
})


app.get('/contact', (req,res) => {
    res.render('contact.ejs')
})










app.listen(3000,
    console.log('Listening on 3000')
)