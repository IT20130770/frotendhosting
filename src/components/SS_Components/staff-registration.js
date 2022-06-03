import React,{useState} from "react";
import axios from "axios";
import BackendHomeNavBar from "../Layout/BackendHomeNavBar";
import Footer from '../Layout/footer';

export default function StaffSignup(){
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [faculty, setfaculty] = useState("");
    const [feild, setfeild] = useState("");
    const [staff_id, setstaff_id] = useState("");
    const [role,setrole] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");

    const sendData = async (e) => {
        e.preventDefault();
        
        let new_staff = {
            name: name,
            phone: phone,
            faculty: faculty,
            feild:feild,
            staff_id: staff_id,
            role:role,
            email: email,
            pwd: pwd1
        }

        if (pwd1 === pwd2) { 
        axios.post("http://localhost:8070/staff/staffsignup",new_staff)
        .then(()=>{
            alert("Registration Success")
            window.location = "/stafflogin"
        }).catch((err)=>{
            alert(err)
        })
        }else{
            alert("Password dismatch")
        }
        setname("");
        setphone("");
        setfaculty("");
        setfeild("");
        setstaff_id("");
        setrole("");
        setEmail("");
        setPassowrd1("");
        setPassowrd2("");  
      
    }
    return(
<div>
  <BackendHomeNavBar/> 
     <br/>
       <div class="row d-flex align-items-center justify-content-center">
          <div style={{width: 1000,background: "#E6E6FA",height:818}}>
             <div class="card-body" >       
                <form action="" method="post" name="form" onSubmit={sendData}> 
                    <div class="row g-0">
                <div class="col-xl-7 d-none d-xl-block"><br/>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <b><u>STAFF&nbsp;&nbsp;REGISTERATION&nbsp;&nbsp; FORM</u></b></h3><br/><br/><br/>
   <img src="https://filerscorner.com/wp-content/uploads/2021/07/Copyright-Registration.svg" style={{width: 750}}/>
        </div>
             <div class="col-xl-5">
                <br/>
                  <div class="form-outline mb-2">
                      <label class="form-label">
                         <b><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full Name</b></label>
                      <div className="col-md-10"><input type="text"class="form-control" onChange={(e) => setname(e.target.value)} required/>
                 </div></div>
            <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone Number</b></label>
         <div className="col-md-10"><input type="text" class="form-control" onChange={(e) => setphone(e.target.value)} pattern="[0-9]{10}" required />
             </div></div>
                 <div class="form-outline mb-2">
                     <label class="form-label">
                          <b><i class="fa fa-university"></i>&nbsp;&nbsp;&nbsp;Faculty</b></label>
                             <div className="col-md-10">
                  <select className="form-control" name="faculty"  class="form-control" onChange={(e) => setfaculty(e.target.value)} required>
                    <option value="">Select Faculty</option>
                    <option value="Faculty of Computing">Faculty of Computing</option>
                    <option value="Faculty of Business"> Faculty of Business</option>
                    <option value="Faculty of Engineering"> Faculty of Engineering</option>
                    <option value="Faculty of Humanities & Sciences"> Faculty of Humanities & Sciences</option>
                    <option value="School of Architechture"> School of Architechture</option>
                    <option value="Faculty of Graduate Studies and Research">Faculty of Graduate Studies and Research</option>
                    <option value="Faculty of Graduate Studies and Research"> Faculty of Graduate Studies and Research</option>
                    <option value="SLIIT Academy"> SLIIT Academy</option>
                    <option value="SLIIT International">SLIIT International</option>
                </select>
              </div>
           </div>

     <div class="form-outline mb-2">
          <label class="form-label">
              <b><i class="fa fa-book"></i>&nbsp;&nbsp;&nbsp;Feild</b></label>
                  <div className="col-md-10">
                     <input type="text"  class="form-control" onChange={(e) => setfeild(e.target.value)} required/>
                        </div>
                            </div>

                                 <div class="form-outline mb-2">
                           <label class="form-label">
                      <b><i class="fa fa-id-badge"></i>&nbsp;&nbsp;&nbsp;Staff ID</b></label>
                <div className="col-md-10">
          <input type="text"  class="form-control" onChange={(e) => setstaff_id(e.target.value)} required/>
    </div>
        </div>    
             <div class="form-outline mb-2">
                <label class="form-label">
                   <b><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Staff Member Role</b></label>
                      <div className="col-md-10">
                          <select className="form-control" name="role"  class="form-control" onChange={(e) => setrole(e.target.value)} required>
                              <option value="Select Role">Select Role</option>
                              <option value="Supervisor">Supervisor</option>
                              <option value="Co-Supervisor">Co-Supervisor</option>
                              <option value="Panel Memeber">Panel Memeber</option>
                        </select>
                    </div>
              </div>
         <div class="form-outline mb-2">
              <label class="form-label">
                   <b><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email Address</b></label>
                       <div className="col-md-10"><input type="email" class="form-control"
                            pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                               inputMode="email" onChange={(e) => setEmail(e.target.value)} required/>
                                   </div>
                                      </div>
                                    <div class="form-outline mb-2">
                              <label class="form-label">
                        <b><i class="fa fa-key" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Password</b></label>
                  <div className="col-md-10"><input type="password" class="form-control" data-toggle="tooltip" data-placement="center" title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                         pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                            onChange={(e) => setPassowrd1(e.target.value)} required/>
                               </div>
                                   </div>
                                     <div class="form-outline mb-2">
                                 <label class="form-label">
                           <b><i class="fa fa-unlock-alt">
                    </i>&nbsp;&nbsp;&nbsp;Repeat Password</b></label>
              <div className="col-md-10"><input type="password" class="form-control"  title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                         onChange={(e) => setPassowrd2(e.target.value)}/>
                            </div>
                                </div>
                                    <div class="d-flex justify-left pt-1" >
                              <label >Already Registered? &nbsp;&nbsp;</label>
                        <a href="/stafflogin" >Sign In</a>
                    </div>       
                <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;Submit</button></div> 
        </div>
             </div>
                </form>
                    </div>
                        </div>
                            </div>
                                <br/>
                                    <Footer/>
                                       </div>
    )
  }
