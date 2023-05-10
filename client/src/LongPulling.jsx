import React,{useState} from 'react'

const LongPulling = () => {
    const [messages,setMessages] = useState([])
  return (
    <div className='center'>
        <div>
            <div>
                <input type="text" />
                <button>Отправить</button>
            </div>
            <div className="messages"></div>
        </div>
      
    </div>
  )
}

export default LongPulling
