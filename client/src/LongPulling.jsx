import React,{useEffect, useState} from 'react'
import axios from 'axios'

const LongPulling = () => {
    const [messages,setMessages] = useState([])
    const [value,setValue] = useState('')


    const sendMessage = async ()=>{
      await axios.post('http://localhost:5000/new-messages',{
        message:value,
        id:Date.now()
      })
    }

    useEffect(()=>{

    },[])

    const subscribe = async ()=>{
        try{

        }catch(e){
            console.log(e)
        }
    }
  return (
    <div className='center'>
        <div>
            <div>
                <input   value={value} onChange={e =>setValue(e.target.value)}type="text" />
                <button onClick={sendMessage}>Отправить</button>
            </div>
            <div className="messages">
                {messages.map((mess)=>{
            <div className='message' key={mess.id}>{mess.message}</div>
                })}
        </div>
        </div>
      
    </div>
  )
}

export default LongPulling
