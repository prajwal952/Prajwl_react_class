import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Routing from './Routes/Routing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (

    <div className="App">
    <Navbar/>
    <Routing/>
    <Footer/>
  
    </div>
    
  );
}

export default App;
