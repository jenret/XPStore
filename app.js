const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set("views", `${__dirname}/views`);

const json = require("./pokemon.json");

app.use("/logic",express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('mockup', json)
});

app.get("/team", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json, null, 3));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})