import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateDepartment = () => {

    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)



    useEffect(() => {
        loadStudents();
    }, [])



   let loadStudents = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/departup/${id}`);
    console.log(result.data.name);

    
    setName(result.data.name);
    
   }



   const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('name',name)
        

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/departup/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/showDepartment");
            alert("Department updated successfully !")
        })

    }


    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update A Department</h2>
    
    <div className="form-group">

      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div><br />

      <button onClick={updateSingleStudent} className="btn btn-primary btn-block" style={{marginLeft:"77%"}}>Update Department</button>
   
  </div>
</div>
 
    );
};

export default UpdateDepartment;