import logo from './logo.svg';
import './App.css';
import RegisterUser from './Components/RegisterUser';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateUser from './Components/UpdateUser';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';




function App() {


  return (
    <div className="App">
   


   
    
      <Router>
      




 


   
   
      <Switch>
    
     

                
                  <Route  exact  path='/' component={RegisterUser}/>
                  <Route    path='/edit/:id' component={UpdateUser}/>
                  <Route    path='/login' component={Login}/>
                  </Switch>
                  </Router>
    </div>
  );
}

export default App;
