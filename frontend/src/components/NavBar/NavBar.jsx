/* Librairies */
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

/* REDUX */
import { logout } from '../../redux/user/actionUser';

/* CSS */
import './NavBar.css';
import '../../style.css';

const NavBar = () => {

    const state = useSelector(state => state.connexion);
    let datasUser = useSelector(state => state.userDatas);
    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logout());
    }

    const connexion = state.token.length > 1 ? 
        <>
            <Link to='/User' className="main-nav-item" href="./user.html">
                <i className="fa fa-user-circle"></i>
                {datasUser.firstName}
            </Link>
            <Link onClick={logoutHandler} className="main-nav-item" to='/'>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
        </>
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
