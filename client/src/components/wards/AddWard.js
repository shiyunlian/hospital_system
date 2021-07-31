import axios from 'axios';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/****************************************************************************************
 * Create a file for adding a ward and create stateful component AddWard
 *****************************************************************************************/
 const url = "http://localhost:8090/wards";

const AddWard = () => {
    let history = useHistory();
    const [ward, setWard] = useState({
        WARDID: '',
        BEDID: '',
        PATIENTID: ''
    });
    
   const { WARDID, BEDID, PATIENTID} = ward;

   const onInputChange = e => {
       setWard({ ...ward, [e.target.name]: e.target.value });
   };

   

  React.useEffect(() => {
    axios.get('${url}/1').then((response) => {
      setWard(response.data);
    });
  }, []);
  


   //post add ward record to db.json
   /*
   const onSubmit = async e => {
       e.preventDefault();
       await axios.post("http://localhost:8000/wards", ward);
       history.push("/wards");
   };
   */
   

   const onSubmit = e => {
    e.preventDefault();
    axios.post(url, ward)
    .then((response) => {
       setWard(response.data);
     
    });
    
    history.push("/wards");
    };


   // if (!post) return "No post"


    return(
        <div className="container bg-light">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A ward</h2>
                    <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter ward ID"
                                name="WARDID"
                                value={WARDID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>
                
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Bed Number"
                                name="BEDID"
                                value={BEDID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Patient ID"
                                name="PATIENTID"
                                value={PATIENTID}
                                onChange={ e => onInputChange(e)}
                            />
                        </div>

                        
                        <button className="btn btn-primary btn-block">Add Ward</button>
            </form>
            </div>
        </div>
    
    
        
    )
};

export default AddWard;