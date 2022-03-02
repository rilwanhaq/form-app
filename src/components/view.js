import React from 'react'
import { useEffect } from 'react';


function View() {
  useEffect (() => {
    const name = localStorage.getItem('Name');
    const age = localStorage.getItem('Age');
    const occupation = localStorage.getItem('Occupation');
    const profile = localStorage.getItem('Profile');
    const address = localStorage.getItem('Address');
    const mobile = localStorage.getItem('Mobile');
  },[])

  return (
    <>
      <div className="container">
        <div className="row">
          <h1></h1>
        </div>
      </div>

    </>
  )
}

export default View;