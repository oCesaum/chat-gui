const messages = {
  "Brasil": [
   {id: "1", content: "User 1 Brasil", userId:"user1",},
   {id: "2", content: "User 2 Brasil", userId:"user2",},
  ] ,
  "Argentina": [
   {id: "1", content: "User 1 Brasil 777", userId:"user1",},
   {id: "2", content: "User 2 Brasil 777", userId:"user2",},
  ] ,
 }

 const nomeCanal = "Brasil"

 messages[nomeCanal].push(
   {id: "2", content: "User 2 Argentina", userId:"user2",},
   )

  messages["Bolivia"] = []
  messages.Bolivia.push(
   {id: "2", content: "User 2 Argentina", userId:"user2",},
  )

 console.log(messages)