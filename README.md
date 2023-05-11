# Endless Echo of Salt

## [Description](#table-of-content)

EEOS is a social network web application that uses noSQLs where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table-of-Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)


## [Installation](#table-of-content)
This application is not deployed to Heroku, but it needs insomnia to run and test the functions. Insomnia is r

Required Packages to install
* [Express.js](https://www.npmjs.com/package/express)
* [Mongoose](https://www.npmjs.com/package/mongoose)

```bash
// No need to install
npm i node 

// Packages to install
npm i express
npm i mongoose
npm i mongodb

// to run the program
node index.js // or
npm start
```
## [Usage](#table-of-content)
To run the program, copy and paste this:
```bash
npm start
```
If you see this shows up, then you are on the right track
```bash
> endless-echo-of-salt@1.0.0 start
> node index.js

API server for this project running on port 3001!
```

Next, open insomnia app. If nothing is on the search section, add this line below
```bash
http://localhost:3001/api/users
```

For this walkthrough, we will start off with creating a user.<br>
Change from GET to POST <br>
Change Text to JSON to add new user <br>
```
{
	"userName": "Aisuke",
	"email": "hatGuy@gmail.com"
}
```
To GET all user, you must change POST to GET.









## [Credits](#table-of-content)
Without these guidances, my application would not exist.
18-NOSQL/01-Activities/03-Day/25-Ins-CRUD-Subdoc

* [SchemaTypes](https://mongoosejs.com/docs/schematypes.html)
* [SchemaTypes: Date](https://mongoosejs.com/docs/schematypes.html#dates)
* [SchemaTypes: Getters/Setters](https://mongoosejs.com/docs/tutorials/getters-setters.html)
* [SchemaTypes: Date](https://mongoosejs.com/docs/schematypes.html#dates)
* [SchemaTypes: Default](https://mongoosejs.com/docs/defaults.html)
* [Models: Delete many](https://mongoosejs.com/docs/api/model.html#Model.deleteMany())
* [How to Convert Timestamp to Date Format in JavaScript](https://linuxhint.com/convert-timestamp-to-date-format-javascript/)
* [Date.prototype.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
* [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
