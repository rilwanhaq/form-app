import React from 'react'
import './/home.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


var arr = [];
function Home() {
  const { register, handleSubmit } = useForm();

  const [ name, setName] = useState([]);
  const [ age, setAge] = useState([]);
  const [ occupation, setOccupation] = useState([]);
  const [ profile, setProfile] = useState([]);
  const [ address, setAddress] = useState([]);
  const [ mobile, setMobile] = useState([]);
  const [ gender, setGender] = useState([]);

  function handle ()  {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Occupation',occupation);
    localStorage.setItem('Profile',profile);
    localStorage.setItem('Address',address);
    localStorage.setItem('Mobile',mobile);
    localStorage.setItem('Gender',gender);
  };
  const remove = () => {
    localStorage.removeItem('Name');
    localStorage.removeItem('Age');
    localStorage.removeItem('Occupation');
    localStorage.removeItem('Profile');
    localStorage.removeItem('Address');
    localStorage.removeItem('Mobile');
    localStorage.removeItem('Gender');
  }

  const onSubmit = (data) => {
    arr.push(data);
    console.log(arr);
  }
  let navigate = useNavigate();
  function viewChange(){
    navigate('/view')
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className='pad'>Enter Name :</label>
          <input  value={name}{...register('Name',{ required: "enter name please" })} className="form-control" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
          <label className='pad'>Enter Age :</label>
          <input value={age} type="number" {...register('Age',{ required: true })} className="form-control" id="age" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
          <label className='pad'>Enter Occupation :</label>
          <input value={occupation} type="text" {...register('Occupation',{ required: true })} className="form-control" id="occupation" placeholder="Enter Occupation" onChange={(e) => setOccupation(e.target.value)} />
          <label className='pad'>Add Profile Image</label>
          <input value={profile} type='file' accept='image/*'  multiple="false" {...register('Profile Image',{ required: true })} className="form-control" id="profileImage" placeholder="Add Profile Image" onChange={(e) => setProfile(e.target.value)}/>
          <label className='pad'>Enter Address :</label>
          <input value={address} type="text" {...register('Address',{ required: true })} className="form-control" id="address" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}/>
          <label className='pad'>Enter Mobile Number :</label>
          <input value={mobile} type="text" {...register('Mobile Number',{ required: true })} className="form-control" id="phone" placeholder="Enter Mobile Number" onChange={(e) => setMobile(e.target.value)}/>
          <label className='pad'>Select Gender :</label>
          <input value={gender} type='text' {...register('Gender',{required: true})} className="form-control" id='gender' placeholder='Enter Gender' onChange={(e) => setGender(e.target.value)} />
          <label className='pad'>
          <input type="submit"  onClick={()=>{
            handle()
            viewChange()
          }} />
          </label>
          </div>
          </form>
    </div>
  );
}
export default Home;