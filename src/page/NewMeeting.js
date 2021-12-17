import React, { useEffect, useRef, useState } from 'react'
import Footer from '../compnents/Footer';
import Nav from '../compnents/Nav';
import axios from 'axios';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { baseUrl } from '../config';
import classes from './NewMeeting.module.css'
import { toast } from 'react-toastify';

export default function NewMeeting() {
  const [meeting, setMeeting] = useState(false);
  const [userName1, setUserName1] = useState('');
  const [userName2, setUserName2] = useState('');
  const [date, setDate] = useState(new Date());
  const [mname, setMname] = useState('');

  const submitMeeting = e => {
    e.preventDefault();
    axios.post(`${baseUrl}/meetings/new`, { user1: userName1, user2: userName2, date: date, mname }).then(res => {
      console.log(res);
      if (res.status === 201) {
        setMeeting(res.data.data);
      } else {
        toast.error('Something went wrong');
      }
    }).catch(err => {
      toast.error(err.message)
    })
  }

  return (
    <>
      <Nav />
      <div className='commonFlex commonDimensions'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }} >
          <div >
            <header className="card-header">
              <p className="card-header-title">
                Add New meeting
              </p>
            </header>
            <div className="card commAddCard" style={{ width: '100%' }}>
              <div className="card-content">
                <form className="content">
                  <input className="input is-primary" type="text" placeholder="Enter first Username" required value={userName1} onChange={e => setUserName1(e.target.value)} />
                  <input className="input is-primary" type="text" placeholder="Enter second Username" required value={userName2} onChange={e => setUserName2(e.target.value)} />
                  <div style={{width: '400px'}}>
                  <ReactDatePicker
                    className="input is-primary"
                    id={classes.dateInput}
                    style={{ width: '100%' }}
                    placeholderText="Select date"
                    onChange={(e) => setDate(e)}
                    selected={date}
                  />
                  </div>
                  <input className="input is-primary" type="text" placeholder="Enter meeting name (option)" required value={mname} onChange={e => setMname(e.target.value)} />
                  <button type='submit' className="button is-dark" style={{ width: '100%', marginTop: '20px' }} onClick={submitMeeting} >Submit</button>
                </form>
              </div>
            </div>
          </div>

          {meeting && <div>
            <header className="card-header">
              <p className="card-header-title">
                Last User Added
              </p>
            </header>
            <div className="card commAddCard" style={{ width: '100%' }}>
              <div className="card-content">
                <div className="content"  >
                  <div> <strong style={{ fontSize: '120%', color: 'hsl(348, 100%, 61%)', marginRight: 10 }} >{meeting.mid}</strong> is the meetingId</div>
                  <div><strong>Details</strong> </div>
                  <div>
                    First User
                  </div>
                  <div style={{marginLeft: 20}}>
                   {meeting.uid1} :
                   {meeting.uname1}
                  </div>
                  <div>
                    Second User
                  </div>
                  <div style={{marginLeft: 20}}>
                   {meeting.uid2} : {meeting.uname2}
                  </div>
                  <div>
                    <span>Date</span> <span>{meeting.date.split('T')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <Footer />
    </>
  )
}
