import React, { useState } from 'react'
import Footer from '../compnents/Footer';
import Nav from '../compnents/Nav';
import axios from 'axios';
import { baseUrl } from '../config';
import { toast } from 'react-toastify';

export default function NewUser() {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState('')

  const submitUser = e => {
    e.preventDefault();
    axios.post(`${baseUrl}/users/new`, { name: userName }).then(res => {
      console.log(res);
      if(res.status === 201) {
        setUser(res.data.data);
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
              Add New User
            </p>
          </header>
          <div className="card commAddCard" style={{ width: '100%' }}>
            <div className="card-content">
              <form className="content">
                <input className="input is-primary" type="text" placeholder="Enter User Name" required value={userName} onChange={e => setUserName(e.target.value)} />
                <button type='submit' className="button is-dark" style={{ width: '100%', marginTop: '20px' }} onClick={submitUser} >Submit</button>
              </form>
            </div>
          </div>
        </div>

        {user && <div>
          <header className="card-header">
            <p className="card-header-title">
              Last User Added 
            </p>
          </header>
          <div className="card commAddCard" style={{ width: '100%' }}>
            <div className="card-content">
              <div className="content"  >
                <div> <strong style={{fontSize: '120%', color: 'hsl(348, 100%, 61%)', marginRight: 10}} >{user.uid}</strong> is the userid of {user.name}</div>
                <div></div>
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
