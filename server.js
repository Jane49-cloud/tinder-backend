const cors = require('cors')
const connection = require('./connection/db')
const express = require('express')
const Card = require('./model/cards')
const router = require('./router/router')
const { application } = require('express')

const app = express()

app.use(cors())


//middeleware
app.use(express.json())

//endpoints
app.use("/", router)
app.get("/", (req,res)=>{
    res.send(`Hello geeks!`)
})

app.get('/tindercards', (req, res)=>{
    Card.find((err,data)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

const port = process.env.PORT || 4000

const start = async () =>{
    try {
      await  connection()
      app.listen(port, console.log(`Tinder backend server listening on port ${port}..`))

        
    } catch (error) {
        console.log(error)
    }
}
start()