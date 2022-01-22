/* Pages */
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Components */
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

/* CSS */
import './App.css';

function App() {

    return (
        <div className="App"> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/user" element={<PrivateRoute />}>
                        <Route exact path='/user' element={<User/>}/>   
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>             
        </div>
    );
}

export default App;
