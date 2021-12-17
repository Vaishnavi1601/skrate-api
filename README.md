### Getting started with Skrate Assignment

- Frontend Link : https://skrate-api.web.app/add-user
- Backend Link : https://skrate--api.herokuapp.com

## Git Branches :

- Frontend code => main branch
- Backend code  => backend branch

## Backend Apis as follows :

- To fetch the all users
  ** https://skrate--api.herokuapp.com/users/all : GET
- To fetch the all meetings
  ** https://skrate--api.herokuapp.com/meetings/all : GET
- To add the new user
  ** https://skrate--api.herokuapp.com/user/new : POST
  Required data to be passed in body parameter
  1. username => String 
- To add the new meeting 
  ** https://skrate--api.herokuapp.com/meeting/new : POST
  Required data to be passed in body parameter
  1. valid userId of first User => string
  2. valid userId of second User => String
  3. date => Date
  Optional data to be passed in body parameter
  1. name of the meeting => String

## 3rd party packages used:

#  Backend Packages
1. body-parser : To convert the raw data coming to server in readable staring form.
2. cors : As our backend server is api server and any can interact with it, thus cors will help us out to connect to any other server.
3. express : helps in creating simplified server.
4. mongoose: alternate to mongodb package to interact with mongodb server.
5. nodemon: its a dev dependency. 
6. short-unique-id: to create short uique ids for every new user or meeting.

# Frontend Packages
1. react : This proect is build on React.
2. bulma : css library, used for styling
3. axios : to do api request within our appication.

##  Local Setup 

- Backend 
  -  Go to the root folder
  - > npm install
  - > npm start
- Frontend
  - Go to the root folder
  - Go to `config.js` and select the dev route
  - > npm install
  - > npm start

## Whats new to come v2 ?
1. More suttle UI.
2. More features such as clipboard functionilty. 
3. Much better and targeted toast.
5. Descriptive documentation. 
4. Much more, will be updated soon.


