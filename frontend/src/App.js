/* Pages */
import Home from './pages/Home/Home';

/* Components */
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

/* CSS */
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
