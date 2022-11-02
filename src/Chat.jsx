import { useState } from 'react';

import './App.css';

import AddMessage from './components/AddMessage';
import Channel from './components/Channel';

const channels = {
  '1': "Brasil",
  '2': "Argentina",
  '3': "Peru",
  '4': "Bolivia",
  '5': "Venezuela",
}

const initialMessages = {
  "1": [
   {id: "1", content: "User 1 Brasil", userId:"user1",},
   {id: "2", content: "User 2 Brasil", userId:"user2",},
  ] ,
  "2": [
   {id: "1", content: "User 1 Brasil 777", userId:"user1",},
   {id: "2", content: "User 2 Brasil 777", userId:"user2",},
  ] ,
  "3": [
   {id: "1", content: "User 1 Peru 777", userId:"user1",},
  ] ,
  "4": [] ,
  "5": [] ,
 }

export default function Chat() {
  const [chatChannelId, setChatChannelId] = useState("1")
  const [messages, setMessages] = useState(initialMessages);

  const changeChannel = (channel) => {
    setChatChannelId(channel)
  }

  const selectedChannel = channels[chatChannelId]

  const handleMessageAddition = (messageContent, userId) => {
    const newMessages = { ...messages }; 
    newMessages[chatChannelId].push({
      id: `${new Date().getTime()}`,
      content: messageContent,
      userId: userId,
    })

    setMessages(newMessages)
  }

  const handleMessageDelete = (id) => {
    const newMessages = { ...messages }; 
    newMessages[chatChannelId] = newMessages[chatChannelId].filter(message => message.id !== id)

    setMessages(newMessages)
  }

  const channelsName = []

  for (var i in channels) {
    if (channels.hasOwnProperty(i)) {
      channelsName.push({id: i, name: channels[i],})
    }
  }

  return(
    <div>
      <div className='content-1'>
        <div className='header'>
          <p className='title'>Chat {selectedChannel}</p>
        </div>

        <div className='chat-container'>
          <div className='channel-btn'>
            {channelsName.map(channel => (
            <p 
            key={channel.id}
            onClick={() => changeChannel(channel.id)}
            className={channel.name === selectedChannel ? ("active") : ("inactive")}
            >{channel.name}</p>
            ))}
          </div>
          <div className='chat'>
            <Channel
              // messages={filteredMessages}
              messages={messages[chatChannelId]}
              handleMessageDelete={handleMessageDelete} 
              />
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