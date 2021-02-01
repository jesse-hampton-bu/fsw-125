const express = require("express")
const app = express()

app.use(express.json())

app.use("/todoItems", require("./routes/todoRouter.js"))



app.listen(3000, () => {
    console.log("the server is listening on port 3000!")
})