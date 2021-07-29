import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/****************************************************************************************
 * Create a file for adding a insurance and create stateful component AddInsurance
 *****************************************************************************************/
const url = "http://localhost:8000/insurances";

const AddInsurance = () => {
  let history = useHistory();
  const [insurance, setInsurance] = useState({
    patientID: "",
    insuranceID: "",
    insuranceNumber: "",
    name: "",
    phone: "",
    address: "",
  });

  const { patientID, insuranceID, insuranceNumber, name, phone, address } =
    insurance;

  const onInputChange = (e) => {
    setInsurance({ ...insurance, [e.target.name]: e.target.value });
  };

  //post add insurance record to db.json
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(url, insurance);
    history.push("/insurances");
  };

  return (
    <div className="container bg-light">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A insurance</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter patient ID"
              name="patientID"
              value={patientID}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Insurance ID"
              name="insuranceID"
              value={insuranceID}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Insurance Numer"
              name="insuranceNumber"
              value={insuranceNumber}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Insurance Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Insurance Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Insurance Address"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add insurance</button>
        </form>
      </div>
    </div>
  );
};

export default AddInsurance;
