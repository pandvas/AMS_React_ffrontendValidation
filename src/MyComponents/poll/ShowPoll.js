import { useEffect ,useState } from 'react';
import axios from 'axios';


const ShowPoll = () => {
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    const [vote, setVote] = useState([]);


     const getUsers =async()=>
     {
    
        const response = await axios.get("http://127.0.0.1:8000/api/ppp2");
        // setData({data});
        const value = response.data;
        console.log(value);
        console.log(response.data);
        setVote(value);
        console.log(value);
        
            


        
        
        
        
       
        // console.log(vote);
      }
      console.log("sdhfcsdvhf")
      console.log(vote);
    
      useEffect(() => {
        getUsers();
      }, [])

  



    return (
      <>
        <div>
          <center>
            <h1> Poll Results </h1>
            </center>
          
        { vote.map((curele)=>{

          // c2=curele.length
          // console.log(c2)

          // for(let i=0; i < curele.length;i++){
          if(curele.option == 'YES'){
            c1 = c1+1
          // }
          }
          if(curele.option == 'NO'){
            c2 = c2+1
          }
          return(
            // <h1>{curele.option}</h1>
            <div></div>
            
          )

        })

        }
        <center>
        {/* <h1 style={{color:'green'}}>
        Interested Alumni : {c1}
        </h1>

        <h1 style={{color:'red'}}>
         Not Interested Alumni : {c2}
        </h1> */}
  </center>   
        </div>
        <div className="container mt-5 pt-5">
  <section className="white-text">
    <div className="row">
      <div className="col-12">
        <div className="card z-depth-2">
          <div className="card-body p-0">
            <div className="row mx-0 " >
              <div className="col-lg-6 black rounded-left py-5 px-md-5 pr mr-1" style={{backgroundColor : "#46BFBD"}}>
                <h4 className="font-weight-bold ml-3 mb-4 pb-2 pra">Interested Alumni</h4>
                <ul className="fa-ul mb-0">
                  <li className="mb-2 pra" style={{ fontSize :"30px"}}>{c1}</li>
                </ul>
              </div>
              <div className="col-lg-6 red accent-3 rounded-right py-5 px-md-5 pr mr-4" style={{backgroundColor : "#000"}}>
								<h4 className="font-weight-bold ml-3 mb-4 pb-2 pra" >Not Interested Alumni</h4>
                <ul className="fa-ul mb-0">
                  <li className="mb-2 pra" style={{ fontSize :"30px"}} >{c2}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</>
    )
}
export default ShowPoll;
// import React from "react";
// import { Component } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Button,
// } from "@material-ui/core";
// import { Link } from 'react-router-dom';
// import axios from "axios";
// export default className ShowPoll extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       id: "",
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("http://127.0.0.1:8000/api/ppp2")
//       .then((res) => {
//         //console.log(res.data.products);
//          this.setState({ data: res.data })
//            console.log("fdkncbjfd");
//            console.log(res.data);
//       })
//       .catch((err) => console.error(err));
//   }
//   render() {

//     // console.log(users)
//     return (
//       <div>
//         <Table>
//           <TableHead>
//               <TableCell>Name</TableCell>
//               <TableCell>Contact Details</TableCell>
              
//           </TableHead>
//           <TableBody>
//             {this.state.data.map((data) => {
//               return (
//                 <TableRow>
//                   <TableCell>{data.option}</TableCell>           
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   }
//   }
