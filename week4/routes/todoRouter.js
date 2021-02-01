const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid")

const cleanGarageImg = "https://www.google.com/search?q=images+of+clean+garage&tbm=isch&source=iu&ictx=1&fir=QXSaY1DVdI_-TM%252CfijybJSKJpo_VM%252C_&vet=1&usg=AI4_-kRBS2D54U1JctUe4oGEkYTLgp9MLw&sa=X&ved=2ahUKEwiJ98Ll5rzuAhWRKn0KHaPcA7gQ9QF6BAgMEAE#imgrc=QXSaY1DVdI_-TM"
const paintedFenceImg = "https://www.google.com/search?q=images+of+fence+painting&tbm=isch&source=iu&ictx=1&fir=CU36w9UayMfvUM%252CWZeEvcVzBnEfKM%252C_&vet=1&usg=AI4_-kRs69DMs4jLs0qnNy8NpNrnNM5ZHg&sa=X&ved=2ahUKEwig1Ia85rzuAhUjNX0KHb99A7AQ9QF6BAgKEAE#imgrc=CU36w9UayMfvUM"
const cutGrass = "https://www.google.com/search?q=images+of+cut+grass&tbm=isch&source=iu&ictx=1&fir=w3LLzSgcWLJ5EM%252CnJuZfakVVE75vM%252C_&vet=1&usg=AI4_-kT4w7EnZ8nXzWUbXShJ-xa4TSmYpA&sa=X&ved=2ahUKEwir_7q56bzuAhXFN30KHapSC70Q9QF6BAgHEAE#imgrc=w3LLzSgcWLJ5EM"
const yardDebrisImg = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.leegov.com%2Fsolidwaste%2FPublishingImages%2Fresidents%2Fyardwaste%2FYardWaste.JPG&imgrefurl=https%3A%2F%2Fwww.leegov.com%2Fsolidwaste%2Fresidential%2Fyardwaste&tbnid=-bZq_vv3PXZUyM&vet=12ahUKEwjAq4b16bzuAhWOnJ4KHQkWBI8QMygWegUIARDQAQ..i&docid=11sYGQ4iTN6MvM&w=2048&h=1536&q=images%20of%20yard%20debris&ved=2ahUKEwjAq4b16bzuAhWOnJ4KHQkWBI8QMygWegUIARDQAQ"

const todoItems = [
    {name: "paint", description: "paint the fence", imageUrl: paintedFenceImg, completed: false, _id: uuid.v4()},
    {name: "clean", description: "clean Garage", imageUrl: cleanGarageImg, completed: false, _id: uuid.v4()},
    {name: "cut", description: "cut grass", imageUrl: cutGrass, completed: false, _id: uuid.v4()},
    {name: "clear", description: "clear yard debris", imageUrl: yardDebrisImg, completed: false, _id: uuid.v4()}
]

todoRouter.route("/")

.get((req, res) => {
    res.send(todoItems)
})

.post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todoItems.push(newTodo)
    res.send(" Successfully added " + ` ${newTodo.name} ` + " to the todo list ")
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundItem = todoItems.find(todo => todo._id === todoId)
    res.send(foundItem)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    todoItems.splice(todoIndex, 1)
    res.send(" successfully removed an item from the list ")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    const updateItem = Object.assign(todoItems[todoIndex], req.body)
    res.send(updateItem)
})



module.exports = todoRouter