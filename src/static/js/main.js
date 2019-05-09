(function() {

	const knop = document.getElementById('open')
	const knop2 = document.getElementById('close')
	const el = document.getElementById('list')

	knop.addEventListener('click', () => {
		knop.classList.add('invisible')
		knop2.classList.remove('invisible')
		el.classList.remove('invisible')
		knop2.classList.add('click')
	})

	knop2.addEventListener('click', () => {
		knop.classList.add('click')
		knop.classList.remove('invisible')
		knop2.classList.add('invisible')
		el.classList.add('invisible')
	})

	var socket = io()

	document.querySelector('form').addEventListener('submit', function(e) {
		e.preventDefault()
		socket.emit('chat message', document.querySelector('#m').value)
		document.querySelector('#m').value = ''
		return false
	})

	socket.on('chat message', function(msg) {
		var newLi = document.createElement('li')
		newLi.textContent = msg.message
		document.querySelector('#messages').append(newLi)
	})

})()

// const form = document.getElementById('form')
// const chatInput = document.getElementById("m")
// const sendBtn = document.getElementById("send")
// const messages = document.getElementById('messages')
// const countList = document.querySelector('#chars')
// const feedback = document.getElementById("feedback")
// const socket = io()
//
// sendBtn.addEventListener("click", function() {
// 	socket.emit('chat message', messages.value)
// 	document.querySelector('#m').value = ''
// 	return false
// })
//
// chatInput.addEventListener("keypress", function() {
//   socket.emit("typing", nameInput.value)
// })
//
// socket.on('chat message', function(msg) {
// 	var newLi = document.createElement('li')
// 	countList.innerHTML = ''
// 	newLi.textContent = msg.message
// 	messages.append(newLi)
//
// 	const entries = Object.entries(msg.count)
// 	entries.forEach(char => {
// 		const el = document.createElement('li')
// 		el.innerText = char[0] + ' is ' + char[1] + ' keer gebruikt'
// 		countList.appendChild(el)
// 	})
// })
//
// socket.on("typing", function(data) {
//   feedback.innerHTML = data + " is typing..."
// })
