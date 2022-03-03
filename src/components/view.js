import React from 'react'
import { useState,useEffect } from 'react';
import {storageKey} from "../constants";
import { Table, Button } from "react-bootstrap";
import './view.css';
import { useNavigate } from 'react-router-dom';




function View() {
  const [data,setData]= useState([])
  useEffect (() => {
    const items = JSON.parse(localStorage.getItem(storageKey))
    if(!items)return
    setData(items)
  },[])
  const handleDelete = (id) => {
    const arrAfterDel = data.filter((user) => user.id !== id);
    setData(arrAfterDel)
    localStorage.setItem(storageKey,JSON.stringify(arrAfterDel))
  };

  let navigate = useNavigate();
  function viewChange(id){
    navigate('/update/'+id)
  }


  return (
    <>
      <div className="container">
        <Table striped bordered  variant='dark' size='sm' className='table-margin'>
            <thead>
              <tr>
                <th>profileImage</th>
                <th>Name </th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Gender</th>
                <th>Actions</th>
               
              </tr>
            </thead>
            <tbody>
        {
          data.map((user,i)=>(
            
              <tr key={i}>
                <td>{user.profileImage}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.occupation}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
         
                <td><Button variant="outline-danger" onClick={() => handleDelete(user.id)}>Delete</Button>  <Button variant="outline-success" onClick={() => viewChange(user.id)} >Update</Button></td>
              </tr>         
          ))
        }
        </tbody>
        </Table>
        <Button bsStyle="primary" onClick={() =>
    navigate('/')
  }>Back</Button>
      </div>

    </>
  )
}

export default View;