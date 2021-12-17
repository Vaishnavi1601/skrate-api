import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../compnents/Footer'
import Nav from '../compnents/Nav'
import { baseUrl } from '../config'
import { toast } from 'react-toastify';

export default function AllMeetings() {
  const [allMeetings, setAllMeetings] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/meetings/all`).then(res => {
      console.log(res.data.data.meetings);
      setAllMeetings(res.data.data.meetings);
    }).catch(error => {
      toast.error(error.message);
    })
  }, []);

  const allMeetingsList = allMeetings.map(meet => {
    return <div className='card' style={{ padding: 10, marginBottom: 20 }} >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><span><strong>MeetingId</strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.mid}</strong></span></div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div><span><strong>First UserName </strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.uname1}</strong></span></div>
        <div><span><strong>First UserId </strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.uid1}</strong></span></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div><span><strong>Second UserName </strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.uname2}</strong></span></div>
        <div><span><strong>Second UserId </strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.uid2}</strong></span></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><span><strong>Meeting Date </strong> </span>: <span><strong style={{color: 'hsl(141, 71%, 48%)	'}} >{meet.date.split('T')[0]}</strong></span></div>
    </div>
  })


  return (
    <>
      <Nav />
      <div className='commonFlex commonDimensions'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '70%' }} >
          {allMeetingsList}
        </div>
      </div>
      <Footer />
    </>
  )
}
