function UserMessage({userMessage, handleUserMessageDelete}) {
  const className = 'user-message-container-' + (userMessage.userId === 'user1'? '1': '2') 

  return (
    <div className={className}>
      <p className='userMessage'>{userMessage.content}</p>
      <button 
      className="remove-user-message"
      title="Deletar mensagem"
      onClick={() => handleUserMessageDelete(userMessage.id)}
      >
        X
      </button>
    </div>
  )

}

export default UserMessage