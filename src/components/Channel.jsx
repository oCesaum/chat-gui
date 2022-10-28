import Message from "./Message"

export default function Channel({messages, handleMessageDelete}) {
  return (
    <>
      {messages.map(message => 
        <Message 
          key={message.id} 
          message={message} 
          handleMessageDelete={handleMessageDelete} />
      )}
    </>
  )
}