import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Pagination from 'react-bootstrap/Pagination'
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

export default class ShowDepartment extends Component {
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
        `http://127.0.0.1:8000/api/departdel/${this.state.id}`
      ).then((res) => {
        console.log(res);
        window.location.href = window.location.href;
        // window.location.reload(false);
      })
      .catch((err) => console.error(err));
  }

 
  componentDidMount() {


    const token = localStorage.getItem('loginff');
    console.log(token);
      axios
        .get("http://127.0.0.1:8000/api/getDepartment/",{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res) => {
           this.setState({ data: res.data })
             console.log(res.data);
        })
        .catch((err) => console.error(err));


  }
  render() {

    return (
      <Card>
        <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
          <Card.Title>Department Details</Card.Title>
      <div>
        <Table>
          <TableHead>
          <TableCell>Deptt ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableHead>
          <TableBody>
            {this.state.data.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                
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
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to update
          </Tooltip>
        )}
        placement="bottom"
      ><Link className="btn btn-primary btn-sm" to={`/${data.id}/update/`}>UPDATE</Link>
      </OverlayTrigger>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>



      
<Pagination  style={{ display : "flex" , marginLeft : "35%" , paddingTop : "30px"}}>
  {/* <Pagination.First /> */}
  <Pagination.Item active>{1}</Pagination.Item>

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item >{4}</Pagination.Item>
  {/* <Pagination.Item>{5}</Pagination.Item> */}
  {/* <Pagination.Item >{6}</Pagination.Item> */}

  {/* <Pagination.Item>{10}</Pagination.Item> */}
  {/* <Pagination.Last /> */}
</Pagination>



      </Card.Body>
      </Card>



    );
  }
}