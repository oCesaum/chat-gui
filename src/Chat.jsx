import { useState } from 'react';

import './App.css';

import AddMessage from './components/AddMessage';
import UserMessages from './components/UserMessages';

export default function Chat() {
  const [userMessages, setUserMessages] = useState([])
  const [chatRegion, setChatRegion] = useState("Brasil")

  const regions = ([
    {"name": "Brasil"},
    {"name": "Argentina"},
    {"name": "Peru"},
    {"name": "Venezuela"},
  ])

  const handleUserMessageAddition = (userMessageContent, userId, channel) => {
    const newUserMessages = [...userMessages, {
      content: userMessageContent,
      id: new Date().getTime(),
      userId: userId,
      channel: chatRegion,
    }]

    setUserMessages(newUserMessages)
  }

  const handleUserMessageDelete = (id) => {
    const newUserMessages = userMessages.filter(userMessages => userMessages.id !== id)
    setUserMessages(newUserMessages)
  }

  return(
    <div>
      <div className='content-1'>
        <div className='header'>
          <p className='title'>Chat {chatRegion}</p>
        </div>

        <div className='chat-container'>
          <div className='region-btn'>
            {regions && regions.map(region => (
            <p 
            onClick={() => 
            setChatRegion(region.name)}
            className={region.name === chatRegion ? ("active") : ("inative")}
            >{region.name}</p>
            ))}
          </div>
          <div className='chat'>
            <UserMessages
              channel={chatRegion}
              userMessage={userMessages}
              handleUserMessageDelete={handleUserMessageDelete} />
          </div>
        </div>
      </div>


      <div className='users'>
        <div className='user-1'>
          <p>user 1</p>

          <div>
          <AddMessage 
            handleUserMessageAddition={(content) => {
            handleUserMessageAddition(content, 'user1', 1 )
          }} />
          </div>
        </div>

        <div className='user-2'>
          <p>user 2</p>

          <div>
            <AddMessage 
              handleUserMessageAddition={(content) => {
              handleUserMessageAddition(content, 'user2', 1)
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}