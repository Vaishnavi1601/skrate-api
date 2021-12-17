const express = require('express');
const mongoose = require('mongoose');
const ShortUniqueId = require('short-unique-id');
const cors = require('cors');
const bodyParser = require('body-parser');

const User = require('./modals/user');
const Meeting = require('./modals/meeting');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const uuid = new ShortUniqueId(5);

const PORT = process.env.PORT || 9000;
const mongoUri = `mongodb+srv://vaishnavi123:vaishnavi123@cluster0.7veks.mongodb.net/skrate`;

app.post('/users/new', (req, res) => {
  // console.log(req);
  const name = req.body.name;
  // console.log('name : ', name);
  if (!name) {
    return res.status(200).json({
      staus: 200,
      data: {
        message: 'Wrong Formate'
      }
    })
  }


  const _id = uuid();
  // console.log('_id', _id);
  const newUser = new User({
    uid: _id,
    name,
  })
  // console.log('newUser', newUser);
  newUser.save().then(data => {
    // console.log('data', data);
    return res.status(201).json({
      statusCode: 201,
      data: {
        uid: _id,
        name,
        message: 'User added successfully',
      }
    })
  }).catch(err => {
    // console.log('err', err);
    // const status = err.status || 500;
    return res.status(200).json({
      statusCode: 200,
      message: 'Failed to save the username.'
    })
  })
});

app.get('/users/all', (req, res) => {
  User.find().then(users => {
    console.log('users', users);
    return res.status(200).json({
      status: 200,
      data: {
        users,
        message: 'Successfully fetched all users',
      }
    })
  }).catch(err => {
    const status = err.status || 500;
    return res.status(status).json({
      statusCode: status,
      message: 'Failed to save the username.'
    })
  })
})

app.post('/meetings/new', (req, res) => {
  const u1 = req.body.user1;
  const u2 = req.body.user2;
  const date = req.body.date;
  const mname = req.body.mname;

  console.log('all', u1, u2, date, mname);
  if (!u1 || !u2 || !date) {
    return res.status(200).json({
      staus: 200,
      data: {
        message: 'Wrong Formate'
      }
    })
  }

  User.find({ uid: u1 }).then(quer1 => {
    const user1 = {};
    if (!quer1) {
      return res.status('200').json({
        staus: 200,
        data: {
          message: 'Unable to find the user with desired uerId'
        }
      })
    }
    user1.uid = u1,
    user1.name = quer1[0].name;
    User.find({ uid: u2 }).then(quer2 => {
      if (!quer2) {
        return res.status('200').json({
          staus: 200,
          data: {
            message: 'Unable to find the user with desired uerId'
          }
        })
      }
      const user2 = {
        uid: u2,
        name: quer2[0].name
      }

      const mid = uuid(5);
      const meet = new Meeting({
        uid1: user1.uid,
        uname1: user1.name,
        uid2: user2.uid,
        uname2: user2.name,
        mid,
        mname: mname || '',
        date
      });
      return meet.save().then(savedData => {
        return res.status(201).json({
          status: 201,
          data: {
            uid1 : user1.uid,
            uname1: user1.name,
            uid2: user2.uid,
            uname2: user2.name,
            date,
            mid,
            mname,
            message: 'Meeting Saved'
          }
        })
      })
    })
  }).catch(err => {
    console.log('err', err );
    return res.status(200).json({
      statusCode: 200,
      message: 'Failed to save the username. Invalid Field entered'
    })
  })
})

app.get('/meetings/all', (req, res) => {
  Meeting.find().then(meetings => {
    return res.status(200).json({
      status: 200,
      data: {
        meetings,
        message: 'All Meetings fetched.'
      }
    })
  }).catch(err => {
    const status = err.status || 500;
    return res.status(status).json({
      statusCode: status,
      message: 'Failed to save the username.'
    })
  })
})

app.get('/', (req, res, next) => {
  console.log('Welcome to Backend Server.')
  return res.send('Welocme to backend server');
})

app.use((req, res) => {
  console.log('404');
  return res.staus(404).json({
    staus: 404,
    data: {
      message: 'Wrong Query'
    }
  })
})

mongoose.connect(mongoUri, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(res => {
  return app.listen(PORT);
}).then(res => {
  console.log('Connected at port ', PORT);
})
  .catch(err => {
    // const status = err.status || 500;
    console.log(err);
  })