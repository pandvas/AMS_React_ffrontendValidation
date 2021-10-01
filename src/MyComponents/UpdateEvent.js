


import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateEvent = () => {

    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [date, setDate] = useState(null)
    const [venue, setVenue] = useState(null)
    

    useEffect(() => {
        loadStudents();
    }, [])



   let loadStudents = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/ptup/${id}`);
    console.log(result.data.name);

    setName(result.data.name);

    setDate(result.data.date);
    setVenue(result.data.venue);
    
   }



   const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('date',date)
        formField.append('venue',venue)
        

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/eventup/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/showEvent");
            alert("Details updated successfully !")
        })

    }


    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update Event Details</h2>
    
    <div className="form-group">

      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Event Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <br />

      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Enter Event Date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Event Venue"
          name="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
      </div><br />

      <button onClick={updateSingleStudent} className="btn btn-primary btn-block" style={{marginLeft:"83%"}}>Update Event</button>
   
  </div>
</div>
 
    );
};

export default UpdateEvent;