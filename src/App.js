import './App.css';
import Navbar from './Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Placetovisit from './Placetovisit';



function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/place' element={<Placetovisit/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
