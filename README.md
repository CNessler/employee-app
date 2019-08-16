# employee-app
An application that allows a user to see employees names, email, phone number, and photo, as well as add, update, and delete employees as needed.

## Installation

Use Homebrew to install PostgreSQL
```bash
brew install postgresql
```
Install dependencies
```bash
npm install
```
Create & start PostgreSQL DB
```bash
pg_ctl -D /usr/local/var/postgres start
```
```bash
createdb employee-app
```
Run migration
```bash
psql -d employee-app -f db/migrations/migration-one.sql
```
Seed DB
```bash
./script.js
```
Start express server
```bash
npm start
```

cd to client directory
Install dependencies
```bash
npm install
```
Run the app
```bash
npm start
```
vist http://localhost:3000/

##TODOs
- write tests for server side logic
- add validation for form
- add more information for each employee
- make everything more visually appealing

##Bugs
- unable to close form once open -> need to update state

##Challenges
It's been awhile since I have created an application from scratch so getting back into that flow took me a second. I have also never used postgresql with a node application so that took some understanding.
