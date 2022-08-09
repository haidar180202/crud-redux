import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const Home = () => {
  const contacts = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const deleteContact = ( id ) =>{
    dispatch({type:"DELETE_CONTACT", payload:id});
    toast.success("Contact deleted succesfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right mt-4">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-6 mx-auto mt-4">
          <h1>Welcome to React Redux Contact App</h1>

          <table className="table table-hover mt-3">
            <thead className="text-white bg-dark text-center mt-3">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">email</th>
                <th scope="col">No telpon</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {contacts.map((x, b) => (
                <tr>
                  <th scope="col">{(b += 1)}</th>
                  <th scope="col">{x.name}</th>
                  <th scope="col">{x.email}</th>
                  <th scope="col">{x.number}</th>
                  <th scope="col">
                    

                    <Link to={`/edit/${x.id}`} className="btn btn-outline-secondary mx-2">
                      Edit
                    </Link>

                    <button className="btn btn-outline-danger mx-2" onClick={()=> deleteContact(x.id)}>
                      Delete
                    </button>
                    

                  </th>
                </tr>
              ))}
              </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
