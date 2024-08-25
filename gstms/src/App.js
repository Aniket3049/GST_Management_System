import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './componant/login';
import Forgot from './componant/Forgot';
import Register from './componant/Register';

function App() {
  return(
    <div>
          <Router>
        <Routes>
         
          <Route exact path="/login" element={<Login/>}/>
        <Route path="/Forgot"element={<Forgot/>} />
        <Route path="/Register"element={<Register/>} />
          
         
        </Routes>
      </Router>
  </div>
  );
}
export default App;
