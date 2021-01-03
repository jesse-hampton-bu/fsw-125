import React from "react"

import ReactDOM from "react-dom"

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("medieval factions");
});

app.get('/evil', (req, res) => {
    res.send("vikings");
});

app.get('/good', (req, res) => {
    res.send("saxons");
});



app.listen(3000, () => {
    console.log("App is listneing on port 3000!")
});