import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'


export default function Singup() {

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6060/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("enter the valid  credentials")
    }


  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  }



  return (
    <>
      <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
        <div>
          <Navbar />
        </div>


        <div className='container pt-3 mt-10' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label text-white">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label text-white ">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label text-white">Address</label>
              <input type="text" className="form-control" value={credentials.geolocation} onChange={onChange} name='geolocation' />

            </div>

            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white"> Confirm Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>

    </>
  )
}
