# Lifely

## Summary
"Kandidaatvinden" interface with new feature, for Lifely

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
Add a new feature to the existing "Kandidaatvinden" chat for Lifely. I want to give the candidate more responsibility by letting them fill in the form.   

## Conclusion
I've learned a lot about working with socket.io. A few weeks ago I had no clue how to work with sockets, but this week I finally got the hang of it.

Due to lack of time (and focussing on the socket.io) I haven't implemented keyevents of any of the exclusive design principles.

## To-do
- [x] Setup server
- [x] Socket.io
- [x] Add more socket interaction
- [x] Recreate the "Kandidaatvinden" design
- [x] `real-time web`
- [ ] `web design`
  - [ ] Key events
  - [ ] Exclusive design principles
- [x] Intermediair interface
  - [x] Add new feature -> `send` pieces of the form
- [ ] Candidate interface
  - [ ] Add new feature -> `request` pieces of the form
- [ ] Auto safe form
- [ ] Update form real time


## Resources
- [Current dashboard at Maribeau office](https://blog.mirabeau.nl/nl/articles/a_smart_meeting_room_dashboard_in_airport_style/ytBXX0WaCkmokgS6ScSOI)
- [Maribeau documentation](https://bitbucket.org/davebitter/mirabeau-smart-office/src/master/)
- [Maribeau api, brought to you by Dennisdemennis](http://mirabeau.denniswegereef.nl/api/v1/rooms)
- [`Request` documentation](https://github.com/request/request)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
