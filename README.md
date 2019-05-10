# Lifely

## Summary
"Kandidaatvinden" interface with new feature, for lifely

![chat](/img/final.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](https://kandidaatvinden.herokuapp.com/) to see my live demo.

## Install
To install this project you'll have to fork this repository and open your terminal
```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/project-2-1819/

  # run the following code to build the app
  npm start
```

## Concept
A meeting room dashboard application for the Maribeau office in Amsterdam. The dashboard shows several measurements done by sensors placed in the meeting rooms. It shows the availability, temperature, humidity-, co2- and barometric pressure in the room.

The idea of this app is that employees of the Maribeau office can easily see what rooms are available and what the environment in the rooms is like. The values are shown in bars that change color when the levels raise to high. When the levels raise too high employees in the rooms will be warned.  


## To-do
- [x] Nodejs, express server
- [x] Runs without JS
- [x] Responsive design
- [x] Filter rooms, different sections
- [x] Server
  - [x] Serve time, `noscript` tag
  - [x] Change bars width according to data
- [x] Client
  - [x] Book rooms, `localStorage`
  - [x] Realtime clock
- [x] Performance
  - [x] Service worker and cache control
  - [x] Offline page
  - [x] Perceived performance
  - [x] Critical css
- [ ] Progressive enhancements
  - [ ] Change color span according to value
  - [ ] Update data without refresh
  - [ ] Notification when levels raise to high


## Resources
- [Current dashboard at Maribeau office](https://blog.mirabeau.nl/nl/articles/a_smart_meeting_room_dashboard_in_airport_style/ytBXX0WaCkmokgS6ScSOI)
- [Maribeau documentation](https://bitbucket.org/davebitter/mirabeau-smart-office/src/master/)
- [Maribeau api, brought to you by Dennisdemennis](http://mirabeau.denniswegereef.nl/api/v1/rooms)
- [`Request` documentation](https://github.com/request/request)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
