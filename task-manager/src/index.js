const express = require('express');
require('./db/mongoose') //this line ensures that our mongoose automatically connects to the db
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req,res, next)=>{
//     if (req.method) {
//         res.status(503).send('Site is under maintenance...')
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('Server is up on port '+ port);
})