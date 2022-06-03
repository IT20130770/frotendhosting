import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';

const UpdateStaffProfile = ({
    upname,
    upphone,
    upfaculty,
    upfeild,
    upstaff_id,
    uprole,
    upemail,
    uppwd,
    show, 
    onHide
}) => {
    const [name, setname] = useState(upname);
    const [phone, setphone] = useState(upphone);
    const [faculty, setfaculty] = useState(upfaculty);
    const [feild, setfeild] = useState(upfeild);
    const [staff_id, setstaff_id] = useState(upstaff_id);
    const [role, setrole] = useState(uprole);
    const [email, setEmail] = useState(upemail);
    

    const updateStaffProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
        name: name,
        phone: phone,
        faculty: faculty,
        feild: feild,
        staff_id: staff_id,
        role: role,
        email: email
      }

      await axios.put('http://localhost:8070/staff/update', updateObject, config)
      .then((res) => {
        alert('Your details updated successfully');
          window.location = "/staffprofile"
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }

    return (
      <div >
      <Modal  show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{background: "#E6E6FA"}}>
        <Modal.Header closeButton> 
          <Modal.Title style={{color: "black"}} id="contained-modal-title-vcenter" className="text-color" >Update My Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={updateStaffProfile} className="text-color" >  
            <div className="form-group row mb-3">

              <div className="col-sm-6">
                <small className="text-muted">Your Name</small>
                <input type="text" className="form-control form-control-user" Value={name}
                onChange={(e) => setname(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Your Phone Number</small>
                <input type="text" className="form-control form-control-user" Value={phone}
                onChange={(e) => setphone(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Faculty</small>
                <input type="text" className="form-control form-control-user" Value={faculty}
                onChange={(e) => setfaculty(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Field</small>
                <input type="text" className="form-control form-control-user" Value={feild}
                onChange={(e) => setfeild(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Staff ID</small>
                <input type="text" className="form-control form-control-user" Value={staff_id}
                onChange={(e) => setstaff_id(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Role</small>
                <input type="text" className="form-control form-control-user" Value={role}
                onChange={(e) => setrole(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Email</small>
                <input type="text" className="form-control form-control-user" Value={email}
                onChange={(e) => setEmail(e.target.value)} required/>
              </div>
            </div>

            <br/> <br/>
 
            <center><Button variant="contained" style={{background: "#151B54",color:"white", width: 50+"%"}} className="w-10" 
            startIcon={<SendIcon />} disableElevation type="submit">Update my details</Button></center>
          </form>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateStaffProfile;