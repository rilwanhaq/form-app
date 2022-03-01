import React from 'react'
import './/home.css';
import { useForm } from 'react-hook-form';

var arr = [];
function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    arr.push(data);
    console.log(arr);
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className='pad'>Enter Name :</label>
          <input  {...register('Name',{ required: true })} className="form-control" id="name" placeholder="Enter Name" />
          <label className='pad'>Enter Age :</label>
          <input type="number" {...register('Age',{ required: true })} className="form-control" id="age" placeholder="Enter Age" />
          <label className='pad'>Enter Occupation :</label>
          <input type="text" {...register('Occupation',{ required: true })} className="form-control" id="occupation" placeholder="Enter Occupation" />
          <label className='pad'>Add Profile Image</label>
          <input type="file" {...register('Profile Image',{ required: true })} className="form-control" id="profileImage" placeholder="Add Profile Image" />
          <label className='pad'>Enter Address :</label>
          <input type="text" {...register('Address',{ required: true })} className="form-control" id="address" placeholder="Enter Address" />
          <label className='pad'>Enter Mobile Number :</label>
          <input type="text" {...register('Mobile Number',{ required: true })} className="form-control" id="phone" placeholder="Enter Mobile Number" />
          <label className='pad'>Enter Phone Number :</label>
          <input type="text" {...register('Phone Number',{ required: true })} className="form-control" id="phone" placeholder="Enter Phone Number"/>
          <label className='pad'>Select Gender :</label>
          <select >
            <option value="Male" {...register('GENDER',{ required: true })} >Male</option>
            <option value="Fmale" {...register('GENDER',{ required: true })}>Female</option>
            <option value="Other" {...register('GENDER',{ required: true })}>Other</option>
          </select>
          <label className='pad'>
          <input type="submit"/>
          </label>
          </div>
          </form>
    </div>
  );
}
export default Home;