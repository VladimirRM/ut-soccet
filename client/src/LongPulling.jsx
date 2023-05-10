import React,{useState} from 'react'

const LongPulling = () => {
    const [messages,setMessages] = useState([])
    const [value,setValue] = useState('')


    const sendMessage = ()=>{
        
    }
  return (
    <div className='center'>
        <div>
            <div>
                <input   value={value} onChange={e =>setValue(e.target.value)}type="text" />
                <button onClick={sendMassage}>Отправить</button>
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
