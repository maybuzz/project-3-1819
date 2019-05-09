(function() {
	const knop = document.getElementById('open')
	const knop2 = document.getElementById('close')
	const el = document.getElementById('list')
	const name = document.getElementById('name')
	const regio = document.getElementById('regio')
	const contact = document.getElementById('contact')
	var socket = io()

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

	socket.emit('auto message', function(auto) {
		var newLi = document.createElement('li')
		newLi.setAttribute('class', 'normal')
		newLi.textContent = "Hallo Marie Joe, hoe gaat het?"
		document.querySelector('#messages').append(newLi)
	})

	name.addEventListener('click', () => {
		socket.emit('name message', name)
	})

	regio.addEventListener('click', () => {
		socket.emit('regio message', regio)
	})

	contact.addEventListener('click', () => {
		socket.emit('contact message', contact)
	})

	document.querySelector('form').addEventListener('submit', function(e) {
		e.preventDefault()
		socket.emit('chat message', document.querySelector('#m').value)
		document.querySelector('#m').value = ''
		return false
	})

	socket.on('chat message', function(msg) {
		var newLi = document.createElement('li')
		newLi.setAttribute('class', 'normal')
		newLi.textContent = msg.message
		document.querySelector('#messages').append(newLi)
	})

	socket.on('name message', function(name) {
		const newLi = document.createElement('li')
		newLi.setAttribute('class', 'right formEl')
		const title = document.createElement('h3')
		title.setAttribute('class', 'message-title')
		title.textContent = "Vul hier uw naam in"
		const firstName = document.createElement('input')
		firstName.setAttribute('type', 'text')
		firstName.setAttribute('name', 'firstName')
		firstName.setAttribute('placeholder', 'Voornaam')
		firstName.setAttribute('class', 'input')
		const tussen = document.createElement('input')
		tussen.setAttribute('type', 'text')
		tussen.setAttribute('name', 'tussen')
		tussen.setAttribute('placeholder', 'Tussenvoegsel')
		tussen.setAttribute('class', 'input')
		const lastName = document.createElement('input')
		lastName.setAttribute('type', 'text')
		lastName.setAttribute('name', 'lastName')
		lastName.setAttribute('placeholder', 'Achternaam')
		lastName.setAttribute('class', 'input')
		newLi.appendChild(title)
		newLi.appendChild(firstName)
		newLi.appendChild(tussen)
		newLi.appendChild(lastName)
		document.querySelector('#messages').append(newLi)
	})

	socket.on('regio message', function(regio) {
		const newLi = document.createElement('li')
		newLi.setAttribute('class', 'right formEl')
		const title = document.createElement('h3')
		title.setAttribute('class', 'message-title')
		title.textContent = "Selecteer uw regio"
		const select = document.createElement('select')
		select.setAttribute('name', 'regio')
		select.setAttribute('class', 'select')
		const set = document.createElement('option')
		set.textContent = 'Voeg regio toe'
		const dr = document.createElement('option')
		dr.setAttribute('value', 'drenthe')
		dr.textContent = 'Drenthe'
		const fl = document.createElement('option')
		fl.setAttribute('value', 'flevoland')
		fl.textContent = 'Flevoland'
		const fr = document.createElement('option')
		fr.setAttribute('value', 'friesland')
		fr.textContent = 'Friesland'
		const ge = document.createElement('option')
		ge.setAttribute('value', 'gelderland')
		ge.textContent = 'Gelderland'
		const gr = document.createElement('option')
		gr.setAttribute('value', 'groningen')
		gr.textContent = 'Groningen'
		const lim = document.createElement('option')
		lim.setAttribute('value', 'limburg')
		lim.textContent = 'Limburg'
		const br = document.createElement('option')
		br.setAttribute('value', 'noord-brabant')
		br.textContent = 'Noord-Brabant'
		const nh = document.createElement('option')
		nh.setAttribute('value', 'noord-holland')
		nh.textContent = 'Noord-Holland'
		const ov = document.createElement('option')
		ov.setAttribute('value', 'overijssel')
		ov.textContent = 'Overijssel'
		const u = document.createElement('option')
		u.setAttribute('value', 'utrecht')
		u.textContent = 'Utrecht'
		const ze = document.createElement('option')
		ze.setAttribute('value', 'zeeland')
		ze.textContent = 'Zeeland'
		const zh = document.createElement('option')
		zh.setAttribute('value', 'zuid-holland')
		zh.textContent = 'Zuid-Holland'
		newLi.appendChild(title)
		newLi.appendChild(select)
		select.appendChild(dr)
		select.appendChild(fl)
		select.appendChild(fr)
		select.appendChild(ge)
		select.appendChild(gr)
		select.appendChild(lim)
		select.appendChild(br)
		select.appendChild(nh)
		select.appendChild(ov)
		select.appendChild(u)
		select.appendChild(ze)
		select.appendChild(zh)
		document.querySelector('#messages').append(newLi)
	})

	socket.on('contact message', function(contact) {
		const newLi = document.createElement('li')
		newLi.setAttribute('class', 'right formEl')
		const title = document.createElement('h3')
		title.setAttribute('class', 'message-title')
		title.textContent = "Vul hier uw contactgegevens in"
		const email = document.createElement('input')
		email.setAttribute('type', 'email')
		email.setAttribute('placeholder', 'E-mailadres')
		email.setAttribute('class', 'input')
		const tel = document.createElement('input')
		tel.setAttribute('type', 'number')
		tel.setAttribute('placeholder', 'Telefoonnummer')
		tel.setAttribute('class', 'input')
		newLi.appendChild(title)
		newLi.appendChild(email)
		newLi.appendChild(tel)
		document.querySelector('#messages').append(newLi)
	})

})()

// chatInput.addEventListener("keypress", function() {
//   socket.emit("typing", nameInput.value)
// })
//
// socket.on("typing", function(data) {
//   feedback.innerHTML = data + " is typing..."
// })
