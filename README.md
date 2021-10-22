# Message System
### Frontend in React.js. System for creating, viewing and editing messages
### Backend in Node.js to provide test data to the front
##
### Steps to run the applications

### To start the frontend go to the root of the frontend folder, open your terminal and follow the steps below

##### `yarn install` To install all Node.js packages that are needed
##### `yarn start` To start project
##### The frontend project will automatically open in your browser, but if not, copy and paste into your browser. `http://localhost:3000`
###### to run the project from your mobile device, you will need to access by IP the route and port where the project is started.
- open CMD and type ipconfig
- look for the section `Wi-Fi Wireless Network Adapter:` and enter the IPv4 address (adding `:3000` at the end
 getting `http://xxx.xxx.x:3000`) in your mobile device's browser
### To start the `API` access the root of the backend folder, open your terminal and follow the steps below

#### You need to have `MYSQL` installed and running on your machine
##### `yarn install` To install all Node.js packages that are needed
##### `yarn sequelize db:create` To create the mysql database
##### `yarn sequelize db:migrate` To create the tables
##### `yarn sequelize db:seed:all` To create random messages
##### `yarn start` To start project
##### The backend project will run on port :3333. copy `http://localhost:3333` and paste into your browser
###### for the frontend to access API routes from a mobile device you will need to change the `baseURL` of the file`. / frontend / src / services / api.js`.
- open CMD and type ipconfig
- look for the `Wi-Fi wireless network adapter:` section and copy the IPv4 address and add `:3333` (looking something like `http://xxx.xxx.x:3333`) then replace the variable value` baseURL` in the file that is located `./frontend/src/services/api.js`
## Tech
- [node.js] - Node.js is open-source, cross-platform software based on Google's V8 interpreter that allows JavaScript code to run outside of a web browser.
- [react.js] - React is an open source JavaScript library focused on creating user interfaces on web pages. It is maintained by Facebook, Instagram, other companies.
- [Css] - Cascading Style Sheets is a mechanism for adding style to a web document

<div>
  <div>
    <h3>Front-end</h3>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  </div>
  <hr>
  <div>
    <h3>Back-end</h3>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  </div>
</div>

##

![img](https://i.imgur.com/JoE4cwM.jpg) ![img](https://i.imgur.com/hKqQYJx.jpg)

