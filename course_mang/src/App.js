import react from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row ,Col, Form } from "reactstrap"
import { ToastContainer , toast} from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";


function App() {

  const btnHandle = () =>{
    toast.success("Submit Successfully !!");
  }


  return (
    <div  >
      <Router>
        <ToastContainer/>
        <Container >
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}> 
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/booking_servicing" Component={AddCourse} exact />
                <Route path="/admin" Component={AllCourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;
