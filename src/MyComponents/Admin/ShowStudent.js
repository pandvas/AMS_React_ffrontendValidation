
import React from "react";
import { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import axios from "axios";
import { withRouter } from "react-router";

class ShowStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: "",
    };
    this.idHandler = this.idHandler.bind(this);
  }
  idHandler(e) {
    this.setState({ id:Number(e.target.value) });
   const myid = (this.state.id);
    
    console.log(typeof myid);
     
   // console.log(myid);
    axios
      .delete(
        `http://127.0.0.1:8000/api/studentdel/${this.state.id}`
      )

      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => console.error(err));
  }

 
  componentDidMount() {
    if(localStorage.getItem('login')){
      const token = localStorage.getItem('login');
      axios
      .get("http://127.0.0.1:8000/api/getStudent/",{ headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => {
        //console.log(res.data.products);
         this.setState({ data: res.data })
           console.log(res.data);
      })
      .catch((err) => console.error(err));
    }else{
      alert("please log in to show Student");
      this.props.history.push('/login');
    }
    
  }
  render() {

    // console.log(users)
    return (
      <Card>
        <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
        <Card.Title>Student Details</Card.Title>
      <div>
        <Table>
          <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Contact Details</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Year Of Passing</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableHead>
          <TableBody>
            {this.state.data.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.contactdetails}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.yearofpassing}</TableCell>
                  <TableCell>
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to delete
          </Tooltip>
        )}
        placement="bottom"
      ><button class="btn btn-danger btn-sm" value={data.id} onClick={this.idHandler}>DELETE</button>
      </OverlayTrigger>
                  </TableCell>

                  <TableCell>
                  {/* <Link className="btn btn-primary btn-sm" to={`/${data.id}/upstudent/`}>UPDATE</Link> */}

                  
                    {/* <button class="btn btn-primary btn-sm" value={data.id} onClick={this.idHandler}>UPDATE</button> */}
                  
                    <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to delete
          </Tooltip>
        )}
        placement="bottom"
      ><Link className="btn btn-primary btn-sm" to={`/${data.id}/upstudent/`}>UPDATE</Link>
      </OverlayTrigger>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      </Card.Body>
      </Card>
    );
  }
}
export default withRouter(ShowStudent);