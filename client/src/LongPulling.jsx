import React,{useState} from 'react'

const LongPulling = () => {
    const [messages,setMessages] = useState([])
    const [value,setValue] = useState('')
  return (
    <div className='center'>
        <div>
            <div>
                <input type="text" />
                <button>Отправить</button>
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
