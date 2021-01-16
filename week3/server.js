const express = require("express")
const app = express()


// Middleware (for request)
app.use(express.json())


//Fake Data

  


//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))

//server Listen

app.listen(3000, () => {
    console.log("The server is listening on Port 3000!")
})
