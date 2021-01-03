const express = require("express");
const app = express();

app.get('/medievalFactions', (req, res) => {
    res.send(medievalFactions = ["saxons", "vikings"]);
});

app.get('/medievalFactions/vikings', (req, res) => {
    res.send(vikings = ["warlords", "archers", "calvaryMen", "shieldWarriors"]);
});

app.get('/medievalFactions/vikings/warlords', (req, res) => {
    res.send(warlords = ["Uthred", "Ragnar", "Finnan", "Ubba"]);
});

app.get('/medievalFactions/vikings/archers', (req, res) => {
    res.send(archers = ["Sihtric", "Ealdwulf", "Svein", "Osferth"]);
});

app.get('/medievalFactions/vikings/calvaryMen', (req, res) => {
    res.send(calvaryMen = ["sigtryggr", "sigurd", "Ralla", "Rolo"]);
});

app.get('/medievalFactions/vikings/shieldWarriors', (req, res) => {
    res.send(shieldWarriors = ["Berg", "Cnut", "Rorik", "Kjartan"]);
});

app.get('/medievalFactions/Saxons', (req, res) => {
    res.send(saxons = ["knights", "archers", "calvary-men", "fyrdWarriors"]);
});

app.get('/medievalFactions/Saxons/knights', (req, res) => {
    res.send(knights = ["Steapa", "Arthur", "Lancealot", "Jaime"]);
});

app.get('/medievalFactions/Saxons/archers', (req, res) => {
    res.send(archers = ["Constantine", "Alfred", "Henry", "Edward"]);
});

app.get('/medievalFactions/Saxons/calvaryMen', (req, res) => {
    res.send(calvaryMen = ["Aethelwold", "Aelfric", "Osbert", "Robert"]);
});

app.get('/medievalFactions/Saxons/fyrdWarriors', (req, res) => {
    res.send(fyrdWarriors = ["Athelstan", "Pyrlig", "John", "Mark"]);
});



app.listen(3000, () => {
    console.log("App is listneing on port 3000!")
});