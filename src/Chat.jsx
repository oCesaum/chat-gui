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
  "3": [] ,
  "4": [] ,
  "5": [] ,
 }

export default function Chat() {
  const [chatChannelId, setChatChannelId] = useState("1")
  const [messages, setMessages] = useState(initialMessages);

  const changeChannel = (channel) => {
    setChatChannelId(channel.id)
  }

  const selectedChannel = channels.find(c => c.id===chatChannelId);
  const channelName = selectedChannel?selectedChannel.name:'nao encontrado';

  const handleMessageAddition = (messageContent, userId) => {
    const newMessages = { ...messages }; //spread operator
    newMessages[chatChannelId].push({
      id: new Date().getTime(),
      content: messageContent,
      userId: userId,
    })

    setMessages(newMessages)
  }

  // const handleMessageDelete = (id) => {
  //   const newMessages = channelMessages.filter(messages => messages.id !== id)
  //   setChannelMessages(newMessages)
  // }



  return(
    <div>
      <div className='content-1'>
        <div className='header'>
          <p className='title'>Chat {channelName}</p>
        </div>

        <div className='chat-container'>
          <div className='channel-btn'>
            {channels && channels.map(channel => (
            <p 
            key={channel.name}
            onClick={() => changeChannel(channel)}
            className={channel.name === channelName ? ("active") : ("inative")}
            >{channel.name}</p>
            ))}
          </div>
          <div className='chat'>
            <Channel
              // messages={filteredMessages}
              messages={messages[chatChannelId]}
              // handleMessageDelete={handleMessageDelete} 
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