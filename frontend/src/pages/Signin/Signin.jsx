/* Librairies */
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

/* REDUX */
import { useSelector, useDispatch } from 'react-redux';
import { connexion } from '../../redux/user/actionUser';
import { useNavigate } from "react-router-dom";

/* component */
import NavBar from '../../components/NavBar/NavBar'

/* CSS */
import './Signin.css';
import '../../style.css';

const Signin = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        /* e.preventDefault(); */
        dispatch(connexion(user));
        navigate('/User');
    }

    return (
        <React.Fragment>
            <NavBar page='Signin' />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle" style={{marginRight: '5px'}}></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                        
                    </form>
                </section>
            </main>
        </React.Fragment>
    )
};

export default Signin;
