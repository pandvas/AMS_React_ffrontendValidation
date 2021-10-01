import React, { Component } from "react";
import axios from "axios";
import { Card,Button } from "react-bootstrap";
import { useHistory } from 'react-router'




class Poll extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      option:'',
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  thii
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  formSubmit(event) {
    event.preventDefault();
    const userObject = {
      option:this.state.selectedOption}
    axios.post('http://127.0.0.1:8000/api/ppp2', userObject)
    .then((res) => {
        console.log(res.data)
        
        alert("You voted successfully")
        this.props.history.push('/result');
        
        window.location.reload(false);
    }).catch((error) => {
        console.log(error)
        // alert("Please select Yes or No");
    });
    this.setState({ option:this.state.selectedOption})


    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <>
       {/* <div>
          <Card className="text-center">
            <Card.Header></Card.Header>
              <Card.Body>
               <Card.Title><h1>POLL EVENT</h1></Card.Title>
                 <Card.Text> <h2 style={{color:'green'}}>   Want ot attain the Alumni Meet ?</h2>   </Card.Text>
                   <form onSubmit={this.formSubmit}>
                   <div className="radio">
                     <label>
                       <input
                           type="radio"
                           value="YES"
                           checked={this.state.selectedOption === "YES"}
                           onChange={this.onValueChange}
                           required
                        />
                        YES
                     </label>
                   </div>
                   <div className="radio">
                     <label>
                       <input
                          type="radio"
                          value="NO"
                          checked={this.state.selectedOption === "NO"}
                          onChange={this.onValueChange}
                       />
                     NO
                     </label>
                   </div>
                          <div>
                           Selected option is :<strong style={{color:'cyan'}}> {this.state.selectedOption}</strong>
                          </div>
                              <button className="button" type="submit">
                              VOTE
                                </button>
                         </form>
                       </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                      </Card>
           </div>
 */}










<div class="container my-10 py-5 z-depth-1 pr  " style = {{marginTop : "40px"}}>
<section class="px-md-5 mx-md-5   text-center text-lg-left dark-grey-text">
<Card.Title><h1>POLL EVENT</h1></Card.Title>
  <p class="text-muted mb-3">Your Vote Is precious for Us</p>
  <div class="row">
    <div class="col-lg-3 col-md-12 mb-lg-0 mb-4">
      <img src="https://mdbootstrap.com/img/Others/cards.png" class="img-fluid" alt="" />
    </div>
    <div class="col-lg-6 col-md-6 mb-lg-0 mb-lg-0 mb-2">
      <h4 class="h4">Want To attain the Alumni Meet</h4>
      <form action="" onSubmit={this.formSubmit}>
  <input  name="rdo"
   id="yes" 
   checked type="radio"
    value="YES" 
    checked={this.state.selectedOption === "YES"}
     onChange={this.onValueChange}
    required />
  <input name="rdo" id="no"  type="radio"
         value="NO"
         checked={this.state.selectedOption === "NO"}
        onChange={this.onValueChange}
         />
  <div class="switch">
    <label for="yes">Yes</label>
    <label for="no">No</label>
    <span></span>
  </div>
</form>
 <div>
   Selected option is :<strong style={{color:'cyan'}}> {this.state.selectedOption}</strong>
    </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
    <form onSubmit={this.formSubmit}>
    <button className="button" type="submit" onSubmit={this.formSubmit}>
     VOTE
    </button>
    </form>
    </div>
  </div>
</section>
</div>
</>
    );
  }
}

export default Poll;