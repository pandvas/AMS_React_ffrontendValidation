
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import NavigationMenu from './MyComponents/Admin/AdminNavigationMenu';
import UserNavigationMenu from './MyComponents/User/UserNavigationMenu';
import AddUniversity from './MyComponents/Admin/AddUniversity';
import AddDepartment from './MyComponents/Admin/AddDepartment';
import AddHod from './MyComponents/Admin/AddHod';
import AddFaculty from './MyComponents/Admin/AddFaculty';
import AddStudent from './MyComponents/Admin/AddStudent';
import AddCourse from './MyComponents/Admin/AddCourse';
import AddEvent from './MyComponents/Admin/AddEvent';
import MapDepartment from './MyComponents/Admin/MapDepartment';
import MapFaculty from './MyComponents/Admin/MapFaculty';
import MapStudent from './MyComponents/Admin/MapStudent';
import MapRoll from './MyComponents/Admin/MapRoll';
import MapEvent from './MyComponents/Admin/MapEvent';
import ShowUniversity from './MyComponents/Admin/ShowUniversity';
import ShowDepartment from './MyComponents/Admin/ShowDepartment';
import ShowHod from './MyComponents/Admin/ShowHod';
import ShowFaculty from './MyComponents/Admin/ShowFaculty';
import ShowStudent from './MyComponents/Admin/ShowStudent';
import ShowRoll from './MyComponents/Admin/ShowRoll';
import ShowEvent from './MyComponents/Admin/ShowEvent';
import AdminFooter from './MyComponents/Admin/AdminFooter';
import AdminHome from './MyComponents/Admin/AdminHome';
import UserHome from './MyComponents/User/UserHome';
import ShowPoll from './MyComponents/poll/ShowPoll';
import Poll from './MyComponents/poll/Poll';
import UpdateUniversity from './MyComponents/UpdateUniversity';
import UpdateDepartment from './MyComponents/UpdateDepartment';
import UpdateFaculty from './MyComponents/UpdateFaculty';
import UpdateStudent from './MyComponents/UpdateStudent';
import UpdateEvent from './MyComponents/UpdateEvent';
import Login from './MyComponents/Admin/Login';
import UserFooter from './MyComponents/Admin/AdminFooter';
import Formregister from './MyComponents/User/Formregister';
const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                <Route  path="/:id/university">
                    <UpdateUniversity />
                    </Route>

                    <Route path="/login">
                        <Login />
                        <UserFooter />
                    </Route>

                    <Route  path="/:id/upstudent">
                    <UpdateStudent />
                    </Route>

                    <Route  path="/:id/updateevent">
                    <UpdateEvent />
                    </Route>

                    <Route  path="/:id/upf">
                    <UpdateFaculty />
                    </Route>
                    <Route  path="/:id/update">
                    <UpdateDepartment />
                    </Route>
                    <Route exact path="/">
                        <UserHome />
                    </Route>

                    <Route path="/adminHome">
                        <NavigationMenu />
                        <AdminHome />
                        
                        <AdminFooter />
                    </Route>

                    {/* <Route  path="/:id/university">
                    <UpdateUniversity />
                    </Route> */}

                    <Route path="/addUniversity">
                        <NavigationMenu />
                        <AddUniversity />
                        <AdminFooter />
                    </Route>
                    <Route path="/addDepartment">
                        <NavigationMenu />
                        <AddDepartment />
                        <AdminFooter />
                    </Route>
                    <Route path="/addHod">
                        <NavigationMenu />
                        <AddHod />
                        <AdminFooter />
                    </Route>
                    <Route path="/addFaculty">
                        <NavigationMenu />
                        <AddFaculty />
                        <AdminFooter />
                    </Route>
                    <Route path="/addStudent">
                        <NavigationMenu />
                        <AddStudent />
                        <AdminFooter />
                    </Route>
                    <Route path="/addCourse">
                        <NavigationMenu />
                        <AddCourse />
                        <AdminFooter />
                    </Route>
                    <Route path="/addEvent">
                        <NavigationMenu />
                        <AddEvent />
                        <AdminFooter />
                    </Route>
                    <Route path="/mapDepartment">
                        <NavigationMenu />
                        <MapDepartment />
                        <AdminFooter />
                    </Route>
                    <Route path="/mapFaculty">
                        <NavigationMenu />
                        <MapFaculty />
                        <AdminFooter />
                    </Route>
                    <Route path="/mapStudent">
                        <NavigationMenu />
                        <MapStudent />
                        <AdminFooter />
                    </Route>
                    <Route path="/mapRoll">
                        <NavigationMenu />
                        <MapRoll />
                        <AdminFooter />
                    </Route>
                    <Route path="/mapEvent">
                        <NavigationMenu />
                        <MapEvent />
                        <AdminFooter />
                    </Route>
                    <Route path="/showUniversity">
                        <NavigationMenu />
                        <ShowUniversity />
                        <AdminFooter />
                    </Route>
                    <Route path="/showDepartment">
                        <NavigationMenu />
                        <ShowDepartment />
                        <AdminFooter />
                    </Route>
                    <Route path="/showHod">
                        <NavigationMenu />
                        <ShowHod />
                        <AdminFooter />
                    </Route>
                    <Route path="/showFaculty">
                        <NavigationMenu />
                        <ShowFaculty />
                        <AdminFooter />
                    </Route>
                    <Route path="/showStudent">
                        <NavigationMenu />
                        <ShowStudent />
                        <AdminFooter />
                    </Route>
                    <Route path="/showRoll">
                        <NavigationMenu />
                        <ShowRoll />
                        <AdminFooter />
                    </Route>
                    <Route path="/showEvent">
                        <NavigationMenu />
                        <ShowEvent />
                        <AdminFooter />
                    </Route>









                    <Route path="/pollq">
                    <UserNavigationMenu />
                        {/* <NavigationMenu /> */}
                        <Poll />
                        <AdminFooter />
                    </Route>
                    
                    <Route path="/result">
                        <NavigationMenu />
                        <ShowPoll />
                        
        
                        <AdminFooter />
                    </Route>


                </Switch>
            </Router>

        </div>
    )
}

export default App
