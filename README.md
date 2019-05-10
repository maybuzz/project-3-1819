# Lifely

## Summary
"Kandidaatvinden" interface with new feature, for Lifely

![chat](/final.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
- [Conclusion](#Conclusion)
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
Add a new feature to the existing "Kandidaatvinden" chat for Lifely. I want to give the candidate more responsibility by letting them fill in the form. For this project I added the new feature to the intermediair side of the chat. The intermediair can `send` pieces of the form to the client. The client can fill them in in the chat. The answers will appear in the form. 

Initially I wanted to create a client (candidate) side chat, so I could work out the feature on this side too. Here clients can `request` pieces of the form so they don't have to wait for the intermediair to respond or send something.  

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

## Credits
[Peter Peerdeman](https://github.com/peterpeerdeman) @peterpeerdeman   
[Lifely](https://github.com/lifelynl) @lifelynl

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
