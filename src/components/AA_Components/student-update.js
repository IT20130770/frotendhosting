import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import {toast} from 'react-toastify';

const UpdateProfile = ({
    upname,
    upnic,
    upfaculty,
    upstudent_id,
    upbatch,
    upspecialization,
    upphone,
    upDOB,
    upemail,
    uppwd,
    show, 
    onHide
}) => {
    const [name, setname] = useState(upname);
    const [nic, setnic] = useState(upnic);
    const [faculty, setfaculty] = useState(upfaculty);
    const [student_id, setstudent_id] = useState(upstudent_id);
    const [batch, setbatch] = useState(upbatch);
    const [specialization, setspecialization] = useState(upspecialization);
    const [phone, setphone] = useState(upphone);
    const [DOB, setDOB] = useState(upDOB);
    const [email, setEmail] = useState(upemail);

    const updateUserProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
        name: name,
        nic: nic,
        faculty: faculty,
        student_id: student_id,
        batch: batch,
        specialization: specialization,
        phone: phone,
        DOB: DOB,
        email: email
      }

      await axios.put('http://localhost:8070/student/update', updateObject, config)
      .then((res) => {
        alert('Your details updated successfully');
          window.location = "/profile"        
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
          <form onSubmit={updateUserProfile} className="text-color" >  
            <div className="form-group row mb-3">

              <div className="col-sm-6">
                <small className="text-muted">Your Name</small>
                <input type="text" className="form-control form-control-user" Value={name}
                onChange={(e) => setname(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Your Faculty</small>
                <input type="text" className="form-control form-control-user" Value={faculty}
                onChange={(e) => setfaculty(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Student ID</small>
                <input type="text" className="form-control form-control-user" Value={student_id}
                onChange={(e) => setstudent_id(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change NIC</small>
                <input type="text" className="form-control form-control-user" Value={nic}
                onChange={(e) => setnic(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Batch</small>
                <input type="text" className="form-control form-control-user" Value={batch}
                onChange={(e) => setbatch(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Specialization</small>
                <input type="text" className="form-control form-control-user" Value={specialization}
                onChange={(e) => setspecialization(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Phone Number</small>
                <input type="text" className="form-control form-control-user" Value={phone}
                onChange={(e) => setphone(e.target.value)} required/>
              </div>
            </div> 

            <div className="col-sm-6">
                <small className="text-muted">Change Date of Birth</small>
                <input type="date" className="form-control form-control-user" Value={DOB}
                onChange={(e) => setDOB(e.target.value)} required/>
              </div>   


           <div className="form-group">
              <small className="text-muted">Change Your Email</small>
              <input type="email" required className="form-control" Value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div> <br/><br/>

            <center><Button variant="contained" style={{background: "#151B54",color:"white", width: 50+"%"}} className="w-10" 
            startIcon={<SendIcon />} disableElevation type="submit">Update my details</Button></center>
          </form>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateProfile;