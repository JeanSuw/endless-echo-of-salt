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
### POST
Change from GET to POST <br>
Change Text to JSON to add new user <br>
``` bash
{
	"userName": "Aisuke",
	"email": "hatGuy@gmail.com"
}
```
### GET All users
To GET all users, you must change POST to GET.

### GET one user with id
To GET a user with specific id, you have to add _id number after "users/"

```bash
http://localhost:3001/api/users/(insert copy_id from your created user)
```

### PUT update a user
To update a specific user, you must change to PUT and add _id number after "users/"

```bash
http://localhost:3001/api/users/(insert copy_id from your created user)
```
Change Text to JSON, then can update by changing either the userName or email. And click send

```bash
{
	"userName": "Thunderbolts",
	"email": "hatGuy@gmail.com"
}
```
You can go back to either GET all user or a user by id and click send to see the changes 

### DELETE users by id
Change to Delete and add _id number after "users/"
```bash
http://localhost:3001/api/users/(insert copy_id from your created user)
```
If success, this message pops up
```bash
{
	"message": "Both Thoughts and Users are deleted!"
}
```
You are welcome to check back to GET all users to see which user is deleted. Don't forget to click send.

### POST create a thought
Before you create a thought, please make sure that you have a user you can reference. If you don't have a user, you can create a [new one](#post).

To create a thought, copy this link below on the searchbar.
```bash
http://localhost:3001/api/thoughts
```
Change Text to JSON to add new thought.
```bash
{
    "thoughtText": "Quit following me",
    "userName": "Aisuke",
    "userId": "{Get the id from GET all user and then copy and paste here}"
}
```
### GET All thought
To get all thoughts, just copy this link
```bash
http://localhost:3001/api/thoughts
```

### GET one thought by ID
To get a specific thougth, you can copy this link. But remember, inside the parenthesis, you must add an id from thought. Use GET all thought to find the id you want to copy and paste.
```bash
http://localhost:3001/api/thoughts/(paste the id here)
```

### POST change one thought by ID
Change GET to POST and Text to JSON.
On the search bar, copy and paste this line below.
```bash
http://localhost:3001/api/thoughts/(paste the id here)
```
Add this code below to update the thought for that user. You are welcome to change what you want for the thoughtText
```bash
{
    "thoughtText": "No, I am not a fan of dangoes"
}
```

### DELETE a thought by ID
Change POST to DELETE
And then on the search bar, copy and paste this part. Delete the parenthesis and replace it with the id
```bash
http://localhost:3001/api/thoughts/(paste the id here)
```

## [Credits](#table-of-content)
Without these guidances, my application would not exist.
* 18-NOSQL/01-Activities/03-Day/21-Ins_Virtuals
* 18-NOSQL/01-Activities/03-Day/25-Ins-CRUD-Subdoc

* [SchemaTypes](https://mongoosejs.com/docs/schematypes.html)
* [SchemaTypes: Date](https://mongoosejs.com/docs/schematypes.html#dates)
* [SchemaTypes: Getters/Setters](https://mongoosejs.com/docs/tutorials/getters-setters.html)
* [SchemaTypes: Date](https://mongoosejs.com/docs/schematypes.html#dates)
* [SchemaTypes: Default](https://mongoosejs.com/docs/defaults.html)
* [Models: Delete many](https://mongoosejs.com/docs/api/model.html#Model.deleteMany())
* [How to Convert Timestamp to Date Format in JavaScript](https://linuxhint.com/convert-timestamp-to-date-format-javascript/)
* [Date.prototype.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
* [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
