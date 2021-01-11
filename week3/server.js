const express = require("express")
const app = express()
const uuid = require("uuid/v4")


// Middleware (for request)
app.use(express.json())


//Fake Data

const warriors = [
    {name: "Ragnar", faction: "viking", rank: "warlord", _id: uuid()},
    {name: "Finnan", faction: "viking", rank: "warlord", _id: uuid()},
    {name: "Ubba", faction: "viking", rank: "warlord", _id: uuid()},
    {name: "Steapa", faction: "saxon", rank: "knight", _id: uuid()},
    {name: "Arthur", faction: "saxon", rank: "knight", _id: uuid()},
    {name: "Lance-alot", faction: "saxon", rank: "knight", _id: uuid()},
    {name: "Bahadur", faction: "persian", rank: "immortal", _id: uuid()},
    {name: "Cyrus", faction: "persian", rank: "immortal", _id: uuid()},
    {name: "Jahangir", faction: "persian", rank: "immortal", _id: uuid()},
    {name: "Julius", faction: "roman", rank: "general", _id: uuid()},
    {name: "Maximus", faction: "roman", rank: "general", _id: uuid()},
    {name: "Thaddeus", faction: "roman", rank: "general", _id: uuid()},
]  



//Routes
app.get("/warriors", (req, res) => {
    res.send(warriors)
})

app.post("/warriors", (req, res) => {
    const newWarrior = req.body
    newWarrior._id = uuid()
    warriors.push(newWarrior)
    res.send('Successfully added ${newWarrior.name} to the ${newWarrior.faction} forces')
})


//server Listen

app.listen(3000, () => {
    console.log("The server is listening on Port 3000!")
})