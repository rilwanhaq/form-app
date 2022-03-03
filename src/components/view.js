import React from 'react'
import { useState,useEffect } from 'react';
import {storageKey} from "../constants";


function View() {
  const [data,setData]= useState([])
  useEffect (() => {
    const items = JSON.parse(localStorage.getItem(storageKey))
    if(!items)return
    setData(items)
  },[])

  return (
    <>
      <div className="container">
      <h1>User Details</h1>
        {
          data.map((user)=>(<div>
            <table>
              <tr>
                <th>{user.profileImage}</th>
                <th>{user.name}</th>
                <th>{user.age}</th>
                <th>{user.occupation}</th>
                <th>{user.address}</th>
                <th>{user.phone}</th>
                <th>{user.gender}</th>
                <button>Delete</button>
                <button>Update</button>
              </tr>
            </table>
          </div>
          ))
        }
      </div>

    </>
  )
}

export default View;