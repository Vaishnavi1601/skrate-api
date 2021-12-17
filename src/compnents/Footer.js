import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='commonFlex' style={{position: 'absolute', bottom: '5px', left: '20px', background: 'white', paddingTop: 5, paddingRight: 5, paddingLeft: 5,  borderRadius: 5}} >
        <i className="fas fa-copyright" style={{marginRight: 10}}></i> {new Date().getFullYear()}
      </div>
    </>
  )
}
