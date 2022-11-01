const channels = [
  {"name": "Brasil", "id": "1"},
  {"name": "Argentina", "id": "2"},
  {"name": "Peru", "id": "3"},
  {"name": "Venezuela", "id": "4"},
  {"name": "Chile", "id": "5"},
]


const chatChannelId = '2';

// channels.filter

// const filteredChannels = channels.filter(c => c.id===chatChannelId);

const selectedChannel = channels.find(c => c.id === chatChannelId);
console.log(selectedChannel.name)