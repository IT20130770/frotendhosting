import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';
import UpdateProfile from './student-update'


const Profile = () => {
    const [name, setname] = useState("");
    const [nic, setnic] = useState("");
    const [faculty, setfaculty] = useState("");
    const [student_id, setstudent_id] = useState("");
    const [batch, setbatch] = useState("");
    const [specialization, setspecialization] = useState("");
    const [phone, setphone] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPassowrd] = useState("");
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

   useEffect(() => {
    setLoading(true)
      const getUserData = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get("http://localhost:8070/student/profile", config)
              .then((res) => {
                setname(res.data.Std.name)
                setnic(res.data.Std.nic)
                setfaculty(res.data.Std.faculty)
                setstudent_id(res.data.Std.student_id)
                setbatch(res.data.Std.batch)
                setspecialization(res.data.Std.specialization)
                setphone(res.data.Std.phone)
                setDOB(res.data.Std.DOB)
                setEmail(res.data.Std.email)
                setPassowrd(res.data.Std.pwd)
                setLoading(false)
              }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])

   const updateUserProfile = () => {
      setShow(true)
    }

    const studentLogout = () => {
        if (window.confirm('Are you sure you wish to logout from this Account?')) {
     alert('Log out successfuly');
      localStorage.removeItem('role')
      localStorage.removeItem('Authorization')
      window.location = "/signin"
        }
    }
  
    if (loading) {
      return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
         <CircularProgress hidden={false} />
      </div>
   }

   return (
                          <div class="bod">
                       <StudentNavBar/><br/><br/><br/>
                   <div class="container">
               <div class="main-bod">    
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="cardd">
                  <div class="cardd-body">
                    <div class="d-flex flex-column align-items-center text-center">
                     <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"  class="rounded-circle" width="180" height="180"/>
                       <div class="mt-3">
                         <h4>{name}</h4>
                          </div> 
                           <div class="col-sm-12">
                        <button style={{background: "#151B54", color:"#ffff"}} onClick={studentLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="cardd mb-3">
                  <div class="cardd-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {name}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">NIC</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {nic}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Faculty</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {faculty}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Student ID</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {student_id}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Batch</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {batch}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Specialization</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {specialization}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {phone}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Date of Birth</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {DOB}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {email}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-12"><br/>
                      <center><button onClick={updateUserProfile} class="btn btn-warning btn-lg ms-2 " target="__blank">Edit Profile Details</button></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
<UpdateProfile
     upname= {name}
     upnic= {nic}
     upfaculty= {faculty}
     upstudent_id= {student_id}
     upbatch= {batch}
     upspecialization= {specialization}
     upphone= {phone}
     upDOB= {DOB}
     upemail= {email}
     uppwd= {pwd}
     show={show}
     onHide={() => setShow(false)}
         />


      </div><br/>
      <Footer/>
    </div>
   )
}

export default Profile