import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Alert, Button} from 'flowbite-react'

export default function SignIn() {

  const navigate = useNavigate();

// state to hold form data
  const  [formData,setFormData] = useState({});

  //setting error message and loading state for signup button
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

  console.log(formData);

  //calling handleOnChange function when user types in the input fields
  const handleChange = async (e) => {
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }

  //form submissionn
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
     return setErrorMessage('Please fill in all fields');
      
    }
    try {
     setLoading(true);
     setErrorMessage(null);
     //make api call to backend to create a new user
     const res=await fetch('/api/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) });

      const data = await res.json();
      if(data.success === false){
        setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        //redirect to home page after successful signup
        navigate ('/');
      }
    }catch(error){
      setErrorMessage('An error occurred. Please try again later.');
      setLoading(false);
    }
};
    

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3  max-w-3xl mx-auto flex-col md:flex-row md:items-stretch gap-5">

        <div className="flex-1">
          <Link to="/" className=" text-white text-sm sm:text-4xl font-bold dark:text-black ">
          <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white '>Uvindu's</span>
          Blog
        </Link>
        <p className='mt-4 text-sm'>This is a demo project. <br/>You can signin with email or google account</p>
        </div>

        <div className="flex-1 ">
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            
            <div className='flex flex-col gap-2'>
              <label value='Your username'>Email</label>
              <input placeholder='Enter your email' type="email" id="email"  className='rounded-md border-gray-500' onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-2'>
              <label value='Your username'>Password</label>
              <input placeholder='**********' type="password" id="password" className='rounded-md border-gray-500' onChange={handleChange} />
            </div>
            <Button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>Sign In</Button>
          </form>
          <div className='flex gap-2 mt-4 mx-7 justify-around text-sm'>
            <span className='text-sm '>Don't have an account? </span>
            <Link to="/sign-up" className='text-sm text-blue-500 flex-1'>Sign Up</Link>
          </div>
          {errorMessage && (
              <Alert className='mt-5   text-center bg-pink-200 px-4 py-2' color='danger'>
                {errorMessage}
              </Alert>
            )}
        </div>
      </div>
    </div>
  )
}
