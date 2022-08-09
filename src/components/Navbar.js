import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className='navbar-brand ml-5 mx-3'>H4dr-App</Link>      
    </nav>
  )
}

export default Navbar