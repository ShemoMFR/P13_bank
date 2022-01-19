/* Librairies */
import React from 'react';
import { Link } from "react-router-dom";

/* CSS */
import './NavBar.css';
import '../../style.css';

const NavBar = (props) => {

  const connexion = props.page === 'user' ? 
      <div>
        <Link to='/User' class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link class="main-nav-item" to='/'>
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
      :
      <Link to='/Signin' className="main-nav-item" >
        <i className="fa fa-user-circle" style={{marginRight: '5px'}}></i>
        Sign In
      </Link>

  return (
    <nav className="main-nav">
        <Link to='/' className="main-nav-logo">
            <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {connexion}
        </div>
    </nav>
  )
};

export default NavBar;
