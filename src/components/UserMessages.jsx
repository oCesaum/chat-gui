import UserMessage from "./UserMessage"

function UserMessages({userMessage, handleUserMessageDelete, channel}) {
  return (
    <>
      {userMessage.filter(msg => msg.channel === channel).map(userMessage => 
        <UserMessage 
          channel={userMessage.channel}
          key={userMessage.id} 
          userMessage={userMessage} 
          handleUserMessageDelete={handleUserMessageDelete} />
      )}
    </>
  )
}

export default UserMessages