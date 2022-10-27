import { useState } from "react"

function AddMessage({handleUserMessageAddition}) {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddUserMessageClick = () => {
    if (inputData === '') return
    handleUserMessageAddition(inputData)
    setInputData('')
  }

  const handleAddUserMessageEnterClick = (e) => {
    if (e.which === 13) {
      handleAddUserMessageClick()
    }
  }

  return (
    <div>
      <input 
      type="text"  
      placeholder='digite aqui'
      onChange={handleInputChange}
      value={inputData}
      onKeyDown={handleAddUserMessageEnterClick}
      title={inputData}
      />
      <button onClick={handleAddUserMessageClick}>&gt;</button>
    </div>
  )
}

export default AddMessage