const express = require("express")
const app = express()


app.use(express.json())



  


app.use("/bounties", require("./routes/bountyRouter.js"))


app.listen(3000, () => {
    console.log("The server is listening on Port 3000!")
})
