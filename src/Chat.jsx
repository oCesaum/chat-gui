import { useState } from 'react';

import './App.css';

import AddMessage from './components/AddMessage';
import Channel from './components/Channel';

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [chatChannel, setChatChannel] = useState("Brasil")

  const channels = ([
    {"name": "Brasil"},
    {"name": "Argentina"},
    {"name": "Peru"},
    {"name": "Venezuela"},
  ])

  const handleMessageAddition = (messageContent, userId) => {
    const newMessages = [...messages, {
      content: messageContent,
      id: new Date().getTime(),
      userId: userId,
      channel: chatChannel,
    }]

    setMessages(newMessages)
  }

  const handleMessageDelete = (id) => {
    const newMessages = messages.filter(messages => messages.id !== id)
    setMessages(newMessages)
  }

  return(
    <div>
      <div className='content-1'>
        <div className='header'>
          <p className='title'>Chat {chatChannel}</p>
        </div>

        <div className='chat-container'>
          <div className='channel-btn'>
            {channels && channels.map(channel => (
            <p 
            onClick={() => 
            setChatChannel(channel.name)}
            className={channel.name === chatChannel ? ("active") : ("inative")}
            >{channel.name}</p>
            ))}
          </div>
          <div className='chat'>
            <Channel
              channel={chatChannel}
              message={messages}
              handleMessageDelete={handleMessageDelete} />
          </div>
        </div>
      </div>


      <div className='users'>
        <div className='user-1'>
          <p>user 1</p>

          <div>
          <AddMessage 
            handleMessageAddition={(content) => {
            handleMessageAddition(content, 'user1', 1 )
          }} />
          </div>
        </div>

        <div className='user-2'>
          <p>user 2</p>

          <div>
            <AddMessage 
              handleMessageAddition={(content) => {
              handleMessageAddition(content, 'user2', 1)
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
}