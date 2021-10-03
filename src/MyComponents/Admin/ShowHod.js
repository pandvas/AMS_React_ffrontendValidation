
import Card from "react-bootstrap/Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import { useHistory } from "react-router";

const ShowHod = () => {
  const [hod, sethod] = useState([]);
  const history = useHistory();

  useEffect(async() => {
    if (localStorage.getItem('login')){
      history.push('/showHod')

    }
    else{
      alert("Please log in to Show HOD");
      history.push("/login")

    }
   const show=await axios("http://127.0.0.1:8000/api/getHod/");
            
              sethod(show.data)
              console.log(hod);
  },[])

  return (
    <Card>
      <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
        <Card.Title>HOD Details</Card.Title>
    <div>
      {/* <center><h1>Show Hod
        </h1></center> */}

<Table striped bordered hover>
<thead>
    <tr>
    <th>Id</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
<tbody>

  {hod.map((data)=>{return(
<tr>
<td>{data.id}</td>
<td>{data.name}</td>
<td>{data.phone}</td>
<td>{data.email}</td>
<td>{data.address}</td>
</tr>
);})}

</tbody>
</Table>
    </div>
    </Card.Body>
    </Card>
  )
}

export default ShowHod