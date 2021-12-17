import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Footer from '../compnents/Footer';
import Nav from '../compnents/Nav';
import { baseUrl } from '../config';

export default function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/users/all`).then(res => {
      console.log(res);
      setAllUsers(res.data.data.users);
    }).catch(error => {
      toast.error('error.message');
    })
  }, []);

  const allUserslist = allUsers.map(user => <div className='card' style={{ padding: 10, marginBottom: 20 }} >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div><span><strong>UserName</strong></span>  : <span><strong style={{color: 'hsl(141, 71%, 48%)	'}}>{user.name}</strong> </span></div>
      <div><span><strong>UserId</strong></span>  : <span><strong style={{color: 'hsl(141, 71%, 48%)	'}}>{user.uid}</strong> </span></div>
    </div>
  </div>)

  return (
    <>
      <Nav />
      <div className='commonFlex commonDimensions'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  height: '100%', width: '70%' }} >
          {allUserslist}
        </div>
      </div>
      <Footer />
    </>
  )
}
