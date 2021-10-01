


import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

const ShowRoll = () => {
  const [roll, setroll] = useState([]);

  useEffect(async() => {
   const show=await axios("http://127.0.0.1:8000/api/getRoll/");
            
              setroll(show.data)
              console.log(roll);
  },[])

  return (
    <Card>
      <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
        <Card.Title>Student Roll no</Card.Title>
    <div>
      <center><h1>Show Roll No
        </h1></center>

<Table striped bordered hover>
<thead>
    <tr>
      
      <th>Student id</th>
      <th>Roll No</th>
    </tr>
  </thead>
<tbody>

  {roll.map((data)=>{return(
<tr>
<td>{data.studentid}</td>
<td>{data.rollno}</td>

</tr>
);})}

</tbody>
</Table>
    </div>
    </Card.Body>
    </Card>
  )
}

export default ShowRoll