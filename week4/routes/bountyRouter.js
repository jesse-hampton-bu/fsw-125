const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid")

const bounties = [
    {firstName: "Mace", lastName: "Windu", isAlive: true, bounty: 900, faction: "Jedi", _id: uuid.v4()},
    {firstName: "Saesee", lastName: "Tiin", isAlive: true, bounty: 500, faction: "Jedi", _id: uuid.v4()},
    {firstName: "Oppo", lastName: "Rancisis", isAlive: true, bounty: 800, faction: "Jedi", _id: uuid.v4()},
    {firstName: "Darth", lastName: "Bane", isAlive: true, bounty: 1000, faction: "Sith", _id: uuid.v4()},
    {firstName: "Sheev", lastName: "Palpatine", isAlive: true, bounty: 2500, faction: "Sith", _id: uuid.v4()},
    {firstName: "Darth", lastName: "Maul", isAlive: true, bounty: 2000, faction: "Sith", _id: uuid.v4()}
]



bountyRouter.route("/")
  
.get((req, res) => {
        res.send(bounties)
    })
    
.post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid.v4()
        bounties.push(newBounty)
        res.send(" Successfully added " + ` ${newBounty.firstName} `  +  ` ${newBounty.lastName} ` +  " to the bounty list")
    })

bountyRouter.get("/:bountieId", (req, res) => {
        const bountieId = req.params.bountieId
        const detectedBountie = bounties.find(bountie => bountie._id === bountieId)
        res.send(detectedBountie)
    } )

bountyRouter.delete("/:bountieId", (req, res) => {
    const bountieId = req.params.bountieId
    const bountyIndex = bounties.findIndex(bountie => bountie._id === bountieId)
    bounties.splice(bountyIndex, 1)
    res.send(" Successfully removed a bounty from the bounty list ")
})

bountyRouter.put("/:bountieId", (req, res) => {
    const bountieId = req.params.bountieId
    const updateBounty = req.body
    const bountyIndex = bounties.findIndex(bountie => bountie._id === bountieId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateBounty)
    res.send(updatedBounty)
})


module.exports = bountyRouter