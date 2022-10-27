export default function Message({message, handleMessageDelete}) {
  const className = 'user-message-container-' + (message.userId === 'user1'? '1': '2') 

  return (
    <div className={className}>
      <p className='userMessage'>{message.content}</p>
      <button 
      className="remove-user-message"
      title="Deletar mensagem"
      onClick={() => handleMessageDelete(message.id)}
      >
        X
      </button>
    </div>
  )

}