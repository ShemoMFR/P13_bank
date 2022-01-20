/* Librairies */
import React, { useState } from 'react';

/* components */
import NavBar from '../../components/NavBar/NavBar'

/* REDUX */
import { useSelector, useDispatch } from 'react-redux';
import { getFetchDataUser } from '../../redux/user/actionUser';

/* CSS */
import './User.css';
import '../../style.css';

const User = () => {

    const [toggle, setToggle] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const state = useSelector(state => state.connexion);
    let datasUser = useSelector(state => state.userDatas);
    const dispatch = useDispatch();

    const header = toggle ? 
        <div className="header">
            <h1 style={{marginBottom: '10px'}}>Welcome back</h1>
            <form className='containerInputs'>
                <div className="input-wrapper-left">
                    <input className='input-left' value={firstName}  />
                    <button className='btn'>SAVE</button>
                </div>
                <div className="input-wrapper-right">
                    <input className='input-right' value={lastName}  />
                    <div className='cancel' onClick={() => setToggle(false) }>CANCEL</div>
                </div>
            </form>
        </div>
        :
        <div className="header">
                <h1 style={{marginBottom: '10px'}}>Welcome back<br />{`${datasUser.firstName && datasUser.firstName} ${datasUser.lastName && datasUser.lastName}!`}</h1>
                <button className="edit-button" onClick={() => setToggle(true) }>Edit Name</button>
        </div>
         
    return (
        <React.Fragment>
            <NavBar page='user' /> 
            <main className="main bg-dark">
                {header}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta end">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta end">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta end">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default User;
