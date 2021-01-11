const express = require("express")
const app = express()

// Middleware (for every request)


// Fake Data
const movies = [
  {title: "die hard", genre: "action"},
  {title: "star wrs IV", genre: "fantasy"},
  {title: "lion king", genre: "fantasy"},
  {title: "friday the 13th", genre: "horror"},
]


// Routes// 
app.get("/movies", (req, res) => {
  res.sedn(movies)
})

app.post("/movies", (req, res) => {
  
})


// Server Listen

app.listen(3000, () =>{
  console.log("the server is listening on port 3000")
})