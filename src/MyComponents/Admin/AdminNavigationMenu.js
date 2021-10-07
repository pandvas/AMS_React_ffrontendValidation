// import { Container, Navbar, NavDropdown, NavLink, Nav } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router'

// function NavigationMenu() {
//   const history = useHistory();
//   function logout(){
//     localStorage.clear();
//     history.push("/login")
//   }

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#">Meet-Admin</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <NavLink ><Link  to="/adminHome" className="btn sandy" style={{color :"#fff"}}>Home</Link></NavLink>
//             <NavDropdown title="Add"  id="collasible-nav-dropdown" className="btn" style={{color :"#fff"}}>
//               <NavDropdown.Item><Link to="/addUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addCourse" className=" btn">Course</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/addEvent" className=" btn">Event</Link></NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Map" id="collasible-nav-dropdown" className="btn sandy" style={{color :"#fff"}}>
//               <NavDropdown.Item><Link to="/mapDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/mapFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/mapStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/mapRoll" className=" btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/mapEvent" className=" btn">Event</Link></NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown  title="Show" id="collasible-nav-dropdown" className="btn" style={{color :" #fff"  }} >
//               <NavDropdown.Item><Link to="/showUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/showDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/showHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/showFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
//               <NavDropdown.Item><Link to="/showStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
//               {/* <NavDropdown.Item><Link to="/showRoll" className=" btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider /> */}
//               <NavDropdown.Item><Link to="/showEvent" className=" btn">Event</Link></NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#" onClick={logout} style={{color :" #fff"}}>Log Out</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>



//   );
// }

// export default NavigationMenu;


import { UserProfile } from 'reactify-ui';
import { Container, Navbar, NavDropdown, NavLink, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import GLogin from './GLogin';
// import author from '../../images/author'
function NavigationMenu() {



  var butn =  null;
  if(localStorage.getItem('login')){
    var butn = 'Log out'; 
  }
  
  const history = useHistory();
  function logout(){
    localStorage.clear();
    history.push("/login")
  }

var check;
if(localStorage.getItem('glogin')){
  check=localStorage.getItem("image");
}
else{
  check="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
}
  return (
    <Navbar collapseOnSelect expand="lg" className="bgi" variant="dark" >
      <Container>
        <Navbar.Brand href="#">Meet<span id = "uni">-Admin</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink   ><Link  to="/adminHome" className="btn sandy"  id="voli">Home</Link></NavLink>
            <NavDropdown title="Add"  id="collasible-nav-dropdown "  id="voli" className="btn " style={{color :"#fff" }}>
              <NavDropdown.Item ><Link to="/addUniversity" className=" btn ">University</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/addDepartment" className=" btn ">Department</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/addHod" className=" btn">Hod</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/addFaculty" className=" btn">Faculty</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/addStudent" className=" btn">Student</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/addCourse" className=" btn">Course</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/addEvent" className=" btn">Event</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Map" className="btn pr" id="collasible-nav-dropdown" id="voli">
              <NavDropdown.Item><Link to="/mapDepartment" className="btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapFaculty" className="btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapStudent" className="btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapRoll" className="btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapEvent" className="btn">Event</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Show" id="collasible-nav-dropdown" className="btn pr" style={{color :" #fff"  }} id="voli" >
              <NavDropdown.Item><Link to="/showUniversity" className=" btn pr">University</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showDepartment" className=" btn pr">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showRoll" className=" btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showEvent" className=" btn">Event</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/result" className=" btn">Result</Link></NavDropdown.Item>

            </NavDropdown>






            <NavDropdown  title="Apply Job" id="collasible-nav-dropdown" className="btn" style={{color :" #fff"  }} id="voli" >
              <NavDropdown.Item><Link to="/jobreg" className=" btn">Register</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/joblogin" className=" btn">Login</Link></NavDropdown.Item><NavDropdown.Divider />
                 <NavLink   ><Link  to="/pollq" className="btn sandy"  id="voli">Poll</Link></NavLink>
            </NavDropdown>







          </Nav>
          <Nav>
          <UserProfile
          imgPath={check}
        //  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
         userName={localStorage.getItem("name")}
         avatarRight
        
       />
          <GLogin />
            {/* <Nav.Link href="#" onClick={logout} id="voli" style={{color :" #fff"}}>Log Out</Nav.Link> */}
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
}

export default NavigationMenu;
