import React, { useState } from 'react'
import  {useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
const AddContact = () => {
    
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [number,setNumber]= useState("");

    const contacts = useSelector((state)=>state)
    const dispatch = useDispatch(); 

    const checkEmail= contacts.find(contact => contact.email === email ); 
    const checkNumber= contacts.find(contact => contact.number === parseInt(number) ); 


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
          id:contacts[contacts.length -1].id +1,
          name,
          email,
          number,
        }
    
        dispatch({type:"ADD_CONTACT",payload:data})
        toast.success("Student added successfully!!")

      
    }


    


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">

        </div>
        <div className="col-md-6 shadow mx-auto mt-5">
            <h1 className='display-3 text-center'>Add Contact Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-4">
                    <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                
                <div className="form-group m-4">
                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="form-group m-4">
                    <input type="number" className='form-control' placeholder='Phone number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                </div>

                <div className="form-group m-4">
                    <input type="submit" className='btn btn-block btn-dark' value='Add Student' />
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact