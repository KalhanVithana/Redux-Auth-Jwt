import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateUser from './Components/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Register from './Components/LoginUser';
import LoginUser from './Components/LoginUser';
import UserLogin from './Components/LoginUser';
import RegisterUser from './Components/RegisterUser';
import UserList from './Components/UserList';




function App() {


  return (
    <div className="App">
   <Router>
    <div className="App">
      <header className="">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
               Redux JWT
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} className="nav-link">
                 Register
                </Link>
              </Nav>


              <Nav>
                <Link to={"Login"} className="nav-link">
                  Login
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={RegisterUser} />
                <Route exact path='/login' component={LoginUser} />
                <Route exact path='/list' component={UserList} />
              
              
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
    </div>
  );
}

export default App;
