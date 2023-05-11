import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const WebSock = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected,setConnected] = useState(false)

    
    
        useEffect(() => {
      socket.current = new WebSocket('ws://localhost:5000')
      socket.current.onopen = ()=>{
          setConnected(true)
      }
      socket.current.onmessage = ()=>{

      }
      socket.current.onclose = ()=>{
      console.log('Socket close')
      }
      socket.current.onerror = ()=>{
      console.log('Socket error')
       
      }
        }, [])
    
      
    
        const sendMessage = async () => {
            await axios.post('http://localhost:5000/new-messages', {
                message: value,
                id: Date.now()
            })
        }

        if(!connected){
           return (
            <div className='center'>
                <div className='form'>
                    <input type="text"  placeholder='Enter your name'/>
                    <button>Connected</button>
                </div>
            </div>
           )
        }
    
        return (
            <div className="center">
                <div>
                    <div className="form">
                        <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                    <div className="messages">
                        {messages.map(mess =>
                            <div className="message" key={mess.id}>
                                {mess.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
    



    


export default WebSock
