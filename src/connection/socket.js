import io from 'socket.io-client'

// const URL = 'http://localhost:8000'
const URL = 'https://app.crmbroker.pl/chess/api/'

const socket = io(URL)


var mySocketId
// register preliminary event listeners here:


socket.on("createNewGame", statusUpdate => {
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}
