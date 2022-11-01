import { useState } from 'react';

import './App.css';

import AddMessage from './components/AddMessage';
import Channel from './components/Channel';

const channels = [
  {"name": "Brasil", "id": "1"},
  {"name": "Argentina", "id": "2"},
  {"name": "Peru", "id": "3"},
  {"name": "Venezuela", "id": "4"},
  {"name": "Chile", "id": "5"},
]

const messages = {
  "1": [
   {id: "1", content: "User 1 Brasil", userId:"user1",},
   {id: "2", content: "User 2 Brasil", userId:"user2",},
  ] ,
  "2": [
   {id: "1", content: "User 1 Brasil 777", userId:"user1",},
   {id: "2", content: "User 2 Brasil 777", userId:"user2",},
  ] ,
  "3": [] ,
  "4": [] ,
  "5": [] ,
 }

export default function Chat() {
  const [chatChannel, setChatChannel] = useState("Brasil")
  const [chatChannelId, setChatChannelId] = useState("1")

  const changeChannel = (channel) => {
    setChatChannel(channel.name)
    setChatChannelId(channel.id)
  }

  const handleMessageAddition = (messageContent, userId) => {
    const newMessages = [...messages[chatChannelId], 
      { 
        id: `${new Date().getTime()}`,
        content: messageContent,
        userId: userId,
      }
    ]

  }

  const handleMessageDelete = (id) => {
    const newMessages = channelMessages.filter(messages => messages.id !== id)
    setChannelMessages(newMessages)
  }

  // const filteredMessages = channelMessages
  console.log(messages)
  console.log(messages[chatChannelId])
  // console.log(filteredMessages)
  console.log(channelMessages)


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
            key={channel.name}
            onClick={() => changeChannel(channel)}
            className={channel.name === chatChannel ? ("active") : ("inative")}
            >{channel.name}</p>
            ))}
          </div>
          <div className='chat'>
            <Channel
              // messages={filteredMessages}
              messages={channelMessages}
              handleMessageDelete={handleMessageDelete} />
          </div>
        </div>
      </div>


      <div className='users'>
        <div className='user-1'>
          <p>user 1</p>

          <div>
          <AddMessage 
            // chatChannelId={chatChannelId}
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