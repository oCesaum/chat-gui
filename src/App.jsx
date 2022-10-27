import Chat from './Chat';

import './App.css';

import { useState } from 'react';

function App() {

  const [regions] = useState([

    {"name": "Brasil"},
    {"name": "Argentina"},
    {"name": "Peru"},
    {"name": "Venezuela"},
  
  ])

  return (
    <div className="App">
      <div className='chats-container'>
        <Chat regions={regions} channel={regions} />
      </div>
    </div>
  );
}

export default App;
