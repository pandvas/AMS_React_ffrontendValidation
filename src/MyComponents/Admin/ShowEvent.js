
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
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
import Card from "react-bootstrap/Card";
import axios from "axios";
import '../../index';

export default class ShowEvent extends Component {
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
        `http://127.0.0.1:8000/api/eventdel/${this.state.id}`
      )

      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => console.error(err));
  }

 
  componentDidMount() {

    const token = localStorage.getItem('loginff');
      console.log(token);
        axios
          .get("http://127.0.0.1:8000/api/getevent/",{ headers: {"Authorization" : `Bearer ${token}`} })
          .then((res) => {
             this.setState({ data: res.data })
               console.log(res.data);
          })
          .catch((err) => console.error(err));
  }
  render() {

    // console.log(users) border="1" style={{color:"red"}}
    return (
      <Card>
        <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
          <Card.Title>Event Details</Card.Title>
      <div className="table">
        <Table >
          <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableHead>
          <TableBody>
            {this.state.data.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.venue}</TableCell>
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
      ><Link className="btn btn-primary button btn-sm" to={`/${data.id}/updateevent/`}>UPDATE</Link>
      </OverlayTrigger>
                  {/* <Link className="btn btn-primary btn-sm" to={`/${data.id}/updateevent/`}>UPDATE</Link> */}
                    {/* <button class="btn btn-primary btn-sm" value={data.id} onClick={this.idHandler}>UPDATE</button> */}
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