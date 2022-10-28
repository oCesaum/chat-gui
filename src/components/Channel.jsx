import Message from "./Message"

export default function Channel({message, handleMessageDelete, channel}) {
  return (
    <>
      {message.map(message => 
        <Message 
          channel={message.channel}
          key={message.id} 
          message={message} 
          handleMessageDelete={handleMessageDelete} />
      )}
    </>
  )
}