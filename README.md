# QuotesPortal
Web application for generating quotes


## Code guidance

### Backend
- under **/server** dir
- mvc architecture
- mongoose for mongodb validation, casting and business logic

### Frontend
- under **/client/app** dir
- components design:
  - **/containers** - holds the parent components (render, navigation, routing between pages)
  - **/details** - holds business logic, e.g for *Game* component (game components, load question, keep score) 
- services - place for fetching data, shuffle arrays, etc.

## UI Components (active):

### Homepage

Generating random quotes on load and getting random quote on button click:
![homepage](https://user-images.githubusercontent.com/62701053/226087274-9e2292aa-7052-47c4-b297-deb65b845ae7.gif)

### Play (easy mode) - options are fully random, non related topics

![playeasy](https://user-images.githubusercontent.com/62701053/226087386-5d3cba96-0f4a-49f3-920e-0fd8cf53d6f4.gif)

## Inactive UI components (TODO):

### - Authentication
### - All time leaderboard based on game performance per user
### - Hard mode (authors options should be on related topics) 

## How to run locally
The collections currently live in mongo database so not possible at the moment for this repo unless you set one yourself and read the uri from env file as [here](https://github.com/ivvlko/QuotesPortal/blob/master/server/db.js#L4). 
- **npm install**
- **cd server & npm start** (starts backend)
- **cd client/app & npm start** (starts frontend)

## Technologies
Node, Express, React, MongoDB
