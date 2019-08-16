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
psql createdb employee-app
```
```bash
pg_ctl -D /usr/local/var/postgres start
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
- make everything more visually appealing
- add more information for each employee

##Bugs
- unable to close form once open -> need to update state



