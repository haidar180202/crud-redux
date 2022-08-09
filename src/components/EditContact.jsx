import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'

const EditContact = () => {
  
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [number,setNumber]= useState("");

  const dispatch =useDispatch()
  const { id } = useParams();

  const contacts = useSelector((state)=>state);
  const currentContact = contacts.find(contact => contact.id === parseInt(id))


  useEffect(() => {
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }

  }, [currentContact])
  
  const checkEmail= contacts.find(contact => contact.id !== parseInt(id) && contact.email === email ); 
  const checkNumber= contacts.find(contact => contact.id !== parseInt(id) && contact.number === number); 
  const handleSubmit = (e) =>{
    e.preventDefault();
   
    
    if(!email || !number || !name  ){
      return toast.warning("Please fill in all fields!");
    }
    if(checkEmail){
      return toast.error("This email already Exist");
      
    }
    if(checkNumber){
      return toast.error("This number already Exist");
    }

    const data ={
      id:parseInt(id),
      name,
      email,
      number,
    }

    dispatch({type:"UPDATE_CONTACT",payload:data})
    toast.success("Student Update successfully!!")

  
}
  return (
    <div className="container">
      {currentContact ?(
        <>
    <div className="row">
      <div className="col-md-12 text-center">

      </div>
      <div className="col-md-6 shadow mx-auto mt-5">
          <h1 className='display-3 text-center'>Edit Student {id}</h1>
          <form onSubmit={handleSubmit}>
              <div className="form-group m-4">
                  <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              
              <div className="form-group m-4">
                  <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="form-group m-4">
                  <input type="number" className='form-control' placeholder='Phone number' value={number} onChange={(e)=>setNumber(e.target.value)} />
              </div>

              <div className="form-group m-4">
                  <input type="submit" className='btn btn-block btn-dark' value='update' />
                  <Link to="/" className='btn btn-block btn-danger mx-3'>Cancel</Link>
              </div>
          </form>
      </div>
    </div>
    </>
    ):(
      <h1 className='display-3 text-center'>StudentContact with id{id} is not exist</h1>
    )}
  </div>
  )
}

export default EditContact