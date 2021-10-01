import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Card from "react-bootstrap/Card";
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

import { Link } from 'react-router-dom';
import axios from "axios";

export default class ShowFaculty extends Component {
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
        `http://127.0.0.1:8000/api/ptdel/${this.state.id}`
      )

      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => console.error(err));
  }

 
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/getfacuilty/")
      .then((res) => {
        //console.log(res.data.products);
         this.setState({ data: res.data })
           console.log(res.data);
      })
      .catch((err) => console.error(err));
  }
  render() {

    // console.log(users)
    return (
      <Card>
        <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
          <Card.Title>Faculty Details</Card.Title>
      <div>
        <Table>
          <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Faculty Id</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableHead>
          <TableBody>
            {this.state.data.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.designation}</TableCell>
                  <TableCell>
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to delete
          </Tooltip>
        )}
        placement="bottom"
      ><button class="btn btn-danger button btn-sm" value={data.id} onClick={this.idHandler}>DELETE</button>
      </OverlayTrigger>
                    {/* <button class="btn btn-danger btn-sm" value={data.id} onClick={this.idHandler}>DELETE</button> */}
                  </TableCell>

                  <TableCell>
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to update
          </Tooltip>
        )}
        placement="bottom"
      ><Link className="btn btn-primary button btn-sm" to={`/${data.id}/upf/`}>UPDATE</Link>
      </OverlayTrigger>
                  {/* <Link className="btn btn-primary btn-sm" to={`/${data.id}/upf/`}>UPDATE</Link> */}
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