const socket = io('http://localhost:8080')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?');
appendMessage('You joined');
socket.emit('new-user', name); //sends to client the result of function

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
});//outputs the message on all client including sender in message-container

socket.on('user-connected', name => {
  appendMessage(`${name} connected`);
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`);
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value;
  console.log(messageInput);
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}
