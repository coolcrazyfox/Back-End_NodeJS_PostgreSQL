const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use(express.static('static'))// for static any files

// app.get('/',(req, res)=>{
//     res.send('my text + NODEJS!!')
// })

// or

// app.get('/', (req, res)=>{
//     console.log(req.query) //http:/localhost:8080/?test=123&query=myText&third=text

//     res.status(200).json('server working')
// })

//post

// app.post('/', (req, res)=>{
//     console.log(req.body) // in postman create http:/localhost:8080
//
//     res.status(200).json('server working')
// })
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
