import { React, useState, useEffect } from 'react'
import { Container, Navbar, Nav, Modal, Form, Button, NavDropdown ,NavLink  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import merahai from "../../images/AMS-logos_white.png";
import UserHome from './UserHome';

const UserNavigationMenu = () => {


    const [showAdmin, setShowAdmin] = useState(false);
    const [showStudent, setShowStudent] = useState(false);
    const [showRegisterAdmin, setShowRegisterAdmin] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const AddAdmin = async () => {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm_password').value;
        if (password === "" || confirmPassword === "") {
            alert('password is empty')
        } else if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let formField = new FormData();
            formField.append('name', name);
            formField.append('email', email);
            formField.append('password', password);
            alert('successfully register')
            await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/admin/register/',
                data: formField
            }).then((response) => {
                console.log(response.data)
            })
        }
        else {
            alert('Password does not match')
        }
    }

  

        const history = useHistory();
        useEffect(() => {
            if (localStorage.getItem('user-info')){
                history.push("/adminHome")
            }
            // if (localStorage.getItem('UserHome')){
            //     history.push("/UserHome")
            // }

        },[])

    async function login(){
        console.warn(email,password)
        let item = {email,password};
        let result = await fetch("http://127.0.0.1:8000/api/admin/login/",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/adminHome")
    }

const Home =()=>
{
history.push('/')
}
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bgi" variant="dark" >
                <Container>
                <img src={merahai} id="logo" />
                    <Navbar.Brand href="#">Alumni<span style={{color :"#FF5252"}}>-Meet</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">

                         <Nav className="me-auto">
                            <Nav.Link href="#" onClick={Home} id="voli">Home</Nav.Link>
                            <Nav.Link href="#about" onClick="" id="voli">About Us</Nav.Link>
                            <Nav.Link href="#gallery" onClick="" id="voli">Gallery</Nav.Link>
                            <Nav.Link href="#contact" onClick="" id="voli">Contact Us</Nav.Link>
                            <Nav.Link href="#ourteam" onClick="" id="voli">Our Team</Nav.Link>
                            <Nav.Link href="/pollq" onClick="/pollq" id="voli">Poll</Nav.Link>
                             {/* <NavLink ><Link  to="/pollq" className="btn sandy"  id="voli">Poll</Link></NavLink>  */}
                        </Nav>
                        {/* <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Login"
                                menuVariant="dark"
                            > 
                                 {/* <NavDropdown.Item href="#" onClick={() => setShowStudent(true)}>Student</NavDropdown.Item>  */}
                                {/* <NavDropdown.Divider />  */}
                                {/* <NavDropdown.Item href="/login" id="uni">Admin</NavDropdown.Item> 
                             </NavDropdown> 
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Register"
                                menuVariant="dark"
                            > 
                                 <NavDropdown.Item href="#" onClick={() => setShowRegisterAdmin(true)}>Admin</NavDropdown.Item> 
                                {/* <NavDropdown.Divider />  */}
                            {/* </NavDropdown> */}
                        {/* </Nav>  */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* -----Admin ---model--- from -------- */}
            <Modal id="admin"
                show={showAdmin}
                onHide={() => setShowAdmin(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Admin Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btnning" onClick={login} >
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* ----------student --- model ---- form----- */}
            <Modal id="stud"
                show={showStudent}
                onHide={() => setShowStudent(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"  >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Student Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btnning" >
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* ----------Admin Register --- model ---- form----- */}
            <Modal id="adminRegister "
                show={showRegisterAdmin}
                onHide={() => setShowRegisterAdmin(false)} 
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                
            >
                <Modal.Header closeButton >
                    <Modal.Title id=" example-custom-modal-styling-title">
                        Admin Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" type="password" placeholder="Password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control id="confirm_password" type="password" required placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btnning" onClick={AddAdmin}>
                            Register
                        </Button>
                        <hr />
                        <div id="error"></div>
                    </Form>
                </Modal.Body>
            </Modal>


        </>

    )
}

export default UserNavigationMenu
