import React from 'react'
import './/home.css';
import { useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {storageKey} from "../constants";


function Update() {

const [item,setItem]= useState({name:"" , age:"", occupation:"",profileImage:"",address:"",phone:"", gender:""})
const {id} = useParams()
const [initialPhone, setInitialPhone] = useState('')

useEffect (() => {
    const items = JSON.parse(localStorage.getItem(storageKey))
    console.log(items)
    if(!items)return
    const searchedItems = items.filter((user) => user.id == id)
    console.log(searchedItems)
    setInitialPhone(searchedItems[0].phone)
    setItem(searchedItems[0])
    console.log(searchedItems[0])
  },[])

  const onChangeValue = (e) => {
    const {id,value}=e.target
    setItem({...item,[id]:value})
  }

  //validating 
  const validated = () => {
    const itemKeys = Object.keys(item)
    for(let i=0; i<itemKeys.length; i++){
      if(item[itemKeys[i]]==="")
      return false
    }
    if (item.phone.length!==10){
      alert("enter valid mobile number");return false
    }
    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validated()){alert("please fill all the fields");return}
    
    let arr =JSON.parse(localStorage.getItem(storageKey));
    console.log(arr)
    if (!arr || arr.length===0){
      localStorage.setItem(storageKey,JSON.stringify([{...item, id: id}]))
      viewChange()
      return
    }
    if(initialPhone !== item.phone){
        const mobileFound = arr.find((user)=>user.phone===item.phone)
        if(mobileFound){alert("Mobile number exist please enter another number");return}
    }
   
    const idFound = arr.find((user)=> user.id == id)
    if(!idFound){
      localStorage.setItem(storageKey,JSON.stringify([...arr,{...item, id: id}]));
      return
    }
      const updatedArray = arr.map((user) => {
        if(user.id != id) return user;
        else return {
          ...item, id:id
        }
      })
      console.log(updatedArray)
   localStorage.setItem(storageKey,JSON.stringify(updatedArray));
    viewChange()
  }



  let navigate = useNavigate();
  function viewChange(){
    navigate('/view')
  }


  return (
    <div className="app">
      <form className="form" onSubmit={onSubmit} >
        <div className="form-group">
          <label className='pad'>Enter Name :</label>
          <input value={item.name} className="form-control" id="name" required placeholder="Enter Name" onChange={onChangeValue}/>
          <label className='pad'>Enter Age :</label>
          <input value={item.age}type="number"  className="form-control" id="age" required placeholder="Enter Age" onChange={onChangeValue}/>
          <label className='pad'>Enter Occupation :</label>
          <input value={item.occupation} type="text" className="form-control" id="occupation" required placeholder="Enter Occupation" onChange={onChangeValue}/>
          <label className='pad'>Add Profile Image</label>
          <input  type="file" accept='image/*'  multiple={false} required className="form-control" id="profileImage" placeholder="Add Profile Image" onChange={onChangeValue}/>
          <label className='pad'>Enter Address :</label>
          <input value={item.address} type="text" className="form-control" id="address" required placeholder="Enter Address" onChange={onChangeValue}/>
          <label className='pad'>Enter Mobile Number :</label>
          <input value={item.phone} type="text"  className="form-control" id="phone" required placeholder="Enter Mobile Number" onChange={onChangeValue}/>
          <label className='pad'>Select Gender :</label>
          <input value={item.gender} type='text' className="form-control" id='gender' required placeholder='Enter Gender' onChange={onChangeValue}/>
          <label className='pad'>
          <input className='btn' type="submit"  onClick={onSubmit} />
          </label>
          </div>
          </form>
    </div>
  );
}
export default Update;