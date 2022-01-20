/* Librairies */
import React from 'react';

/* components */
import NavBar from '../../components/NavBar/NavBar'

/* REDUX */
import { useSelector, useDispatch } from 'react-redux';

/* CSS */
import './User.css';
import '../../style.css';

const User = () => {

    const state = useSelector(state => state);

    console.log(state)

    return (
        <React.Fragment>
            <NavBar page='user' /> 
            <main className="main bg-dark">
                <div className="header">
                    <h1 style={{marginBottom: '10px'}}>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
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
