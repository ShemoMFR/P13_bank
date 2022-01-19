/* Pages */
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';

/* Components */
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

/* CSS */
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div style={{flex: '1'}}>
                <User />
            </div>
            <Footer />
        </div>
    );
}

export default App;
