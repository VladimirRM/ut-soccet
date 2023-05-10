const  express = require('express')
const  cors = require('cors')
const events = require('events')

const emitter =new events.EventEmitter()

const  PORT = 5000

const app = express()

app.use(cors())

app.get('get message',((req,res)=>{

})

)
app.post('new message',((req,res)=>{
      
}))

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))

