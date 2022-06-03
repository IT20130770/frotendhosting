import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateStaffProfile from './StaffUpdate';
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import Footer from '../Layout/footer';
import CircularProgress from '@material-ui/core/CircularProgress';

const StaffProfile = () => {
    const [name, setname] = useState(null)
    const [phone, setphone] = useState(null)
    const [faculty, setfaculty] = useState(null)
    const [feild, setfeild] = useState(null)
    const [staff_id, setstaff_id] = useState(null)
    const [role, setrole] = useState(null)
    const [email , setemail] = useState(null)
    const [pwd , setpwd] = useState(null)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserData = async () => {
            try {
               const config = {
                  headers: {
                     Authorization: localStorage.getItem("Authorization")
                  },
               }
               await axios.get("http://localhost:8070/staff/staffprofile", config)
                  .then((res) => {
                     setname(res.data.Staff.name)
                     setphone(res.data.Staff.phone)
                     setfaculty(res.data.Staff.faculty)
                     setfeild(res.data.Staff.feild)
                     setstaff_id(res.data.Staff.staff_id)
                     setrole(res.data.Staff.role)
                     setemail(res.data.Staff.email)
                     setpwd(res.data.Staff.pwd)
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
   
    //update staff member account details
    const updateStaffProfile = () => {
      setShow(true)
    }

    //logout the staff menber account
    const staffLogout = () => {
      if (window.confirm('Are you sure you wish to logout from this Account?')) {
       localStorage.removeItem('Authorization')
       alert('Log out successfuly');
       window.location = "/"
      }
    }

    if (loading) {
      return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
         <CircularProgress hidden={false} />
      </div>
   }
      return (
                      <div class="bod" style={{background:"#F8F8FF"}}  >
                   <StaffNavbar/>
               <br/><br/><br/><br/>     
            <div class="container">
         <div class="main-body">
      <div class="row gutters-sm">
   <div class="col-md-4 mb-4">
<div class="d-flex flex-column align-items-center text-center">
  <div class="mt-3">
      <div class="d-flex flex-column align-items-center text-center" >
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"  class="rounded-circle" width="180" height="180"/>
              <div class="mt-3">
                <h4>{name}</h4>
            <h4>{staff_id}</h4>
           </div>
        </div>
     </div>
  </div>
    </div>
        <div class="col-md-8">
          <div class="card-body">
             <div class="row">
                <div class="col-sm-3">
             <h6 class="mb-0 "><b>Full Name</b></h6>
          </div>
       <div class="col-sm-9 text-secondary" >
    {name}
</div>
  </div>
      <hr/>
         <div class="row">
            <div class="col-sm-3">
               <h6 class="mb-0"><b>Phone Number</b></h6>
               </div>
           <div class="col-sm-9 text-secondary">
       {phone}
   </div>
</div>
   <hr/>
      <div class="row">
         <div class="col-sm-3">
             <h6 class="mb-0"><b>Faculty</b></h6>
                </div>
           <div class="col-sm-9 text-secondary">
       {faculty}
   </div>
</div>
      <hr/>
          <div class="row">
              <div class="col-sm-3">
                  <h6 class="mb-0"><b>Feild</b></h6>
                     </div>
                 <div class="col-sm-9 text-secondary">
              {feild}
           </div>
      </div>
   <hr/>
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0"><b>Staff ID</b></h6>
             </div>
                <div class="col-sm-9 text-secondary">
                  {staff_id}
                </div>
             </div>
          <hr/>
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0"><b>Role</b></h6>
             </div>
                <div class="col-sm-9 text-secondary">
                {role}
            </div>
        </div>
    <hr/>
      <div class="row">
          <div class="col-sm-3">
             <h6 class="mb-0"><b>Email</b></h6>
                </div>
                   <div class="col-sm-9 text-secondary">
                      {email}
                  </div>
               </div>
            <hr/> 
      <div class="row">
          <div class="col-sm-12">
             <div class="row">
                <div class="col-sm-12"><br/>
                <center>
            <button style={{background: "#151B54", color:"#ffff"}} onClick={staffLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
       <button style={{background: "#9F000F", color:"#ffff"}} onClick={updateStaffProfile} class="btn btn " target="__blank">Update Details</button></center>
   </div>
      </div>     
         </div>  
            </div>
             </div>
        </div>
     </div>
<UpdateStaffProfile
upname ={name}
upphone ={phone}
upfaculty ={faculty}
upfeild ={feild}
upstaff_id ={staff_id}
uprole ={role}
upemail ={email} 
uppwd= {pwd}
show={show}
onHide={() => setShow(false)}/>    
  </div>
</div>


<br/><br/><br/><br/>           
<Footer/>
</div>
   )
}
 
export default StaffProfile;

