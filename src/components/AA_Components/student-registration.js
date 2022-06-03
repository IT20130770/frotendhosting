import React,{useState} from "react";
import axios from "axios";
import Footer from '../Layout/footer';
import StudentNavBar from '../Layout/StudentHomeNavBar';

export default function Signup(){

    const [name, setname] = useState("");
    const [nic, setnic] = useState("");
    const [faculty, setfaculty] = useState("");
    const [student_id, setstudent_id] = useState("");
    const [batch, setbatch] = useState("");
    const [specialization, setspecialization] = useState("");
    const [phone, setphone] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");


    const sendData = async (e) => {
        e.preventDefault();
        
        let new_student = {
            name: name,
            nic: nic,
            faculty: faculty,
            student_id: student_id,
            batch: batch,
            specialization: specialization,
            phone: phone,
            DOB: DOB,
            email: email,
            pwd: pwd1
        }

        if (pwd1 === pwd2) { 
        axios.post("http://localhost:8070/student/signup",new_student)
        .then(()=>{

            alert("Registration Success")
            window.location = "/signin"


        }).catch((err)=>{
            alert(err)
        })
        }else{
            alert("Password dismatch")
        }

        setname("");
        setnic("");
        setfaculty("");
        setstudent_id("");
        setbatch("");
        setspecialization("");
        setphone("");
        setDOB("");
        setEmail("");
        setPassowrd1("");
        setPassowrd2("");  
      
    }


    return(
    
<div>
  <StudentNavBar/>
  <br/>  <br/>  <br/>
       <div class="row d-flex align-items-center justify-content-center">
          <div style={{width: 1000,background: "#E6E6FA",height:1020}}>
             <div class="card-body" >       
             <form action="" method="post" name="form" onSubmit={sendData}> 
  
             <div class="row g-0">
                <div class="col-xl-7 d-none d-xl-block"><br/>
            <h3><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b><u>STUDENT&nbsp;&nbsp;REGISTERATION&nbsp;&nbsp; FORM</u></b></h3><br/><br/><br/><br/><br/><br/><br/>
   <img src="https://askme.studio/assets/images/login-signup.svg" style={{width: 600}}/>
        </div>
        <div class="col-xl-5">
        <br/>
                  <div class="form-outline mb-2">
                      <label class="form-label">
                         <b><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full Name</b></label>
                         <div className="col-md-10">
                         <input type="text"  id="form3Example8" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setname(e.target.value)} required/>
                         </div></div>
            
            
  
                       <div class="form-outline mb-2">
              <label class="form-label">
                   <b><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email Address</b></label>
                       <div className="col-md-10">
                       <input type="email" id="form3Example8" class="form-control form-control-lg" style={{fontSize:"1rem"}}
                              pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                              inputMode="email"
                              onChange={(e) => setEmail(e.target.value)} required/>
                                   </div>
                                      </div>
  
  
  
  
                                      <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone Number</b></label>
         <div className="col-md-10">
         <input type="text" id="form3Example9" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setphone(e.target.value)} pattern="[0-9]{10}" required />
                       </div></div>
  
  
 
                       <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;Date of Birth</b></label>
         <div className="col-md-10">
         <input type="date" id="form3Example99" class="form-control form-control-lg" style={{fontSize:"1rem"}} placeholder="Date Of Birth" onChange={(e) => setDOB(e.target.value)}/>
                          </div></div>
  

                          <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-id-card"></i>&nbsp;&nbsp;&nbsp;NIC Number</b></label>
         <div className="col-md-10">
                          <input type="text" id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setnic(e.target.value)} required/>
                        </div></div>
  
                        <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;&nbsp;Specialization</b></label>
         <div className="col-md-10">
                        <input type="text"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setspecialization(e.target.value)} required/>
                            </div></div>

                            <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-university"></i>&nbsp;&nbsp;&nbsp;Faculty</b></label>
         <div className="col-md-10">
         <input type="text"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setfaculty(e.target.value)} required/>
                    </div></div>
                    
                    <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-id-card"></i>&nbsp;&nbsp;&nbsp;Student ID</b></label>
         <div className="col-md-10">
         <input type="text"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setstudent_id(e.target.value)} required/>
                           </div></div>
  

                           <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-eye"></i>&nbsp;&nbsp;&nbsp;Batch</b></label>
         <div className="col-md-10">
         <input type="text"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setbatch(e.target.value)} required/>
                    </div></div>
  
                            <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-key"></i>&nbsp;&nbsp;&nbsp;Password</b></label>
         <div className="col-md-10">
         <input type="password"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}} data-toggle="tooltip" data-placement="center" title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                          onChange={(e) => setPassowrd1(e.target.value)} required/>
           </div></div>

           <div class="form-outline mb-2">
        <label class="form-label">
    <b><i class="fa fa-unlock-alt"></i>&nbsp;&nbsp;&nbsp;Confirm Password</b></label>
         <div className="col-md-10">
         <input type="password"  id="form3Example97" class="form-control form-control-lg" style={{fontSize:"1rem"}}  title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                            onChange={(e) => setPassowrd2(e.target.value)}/>
           </div></div>
           <div class="d-flex justify-left pt-1" >
                              <label >Already Registered? &nbsp;&nbsp;</label>
                        <a href="/signin" >Sign In</a>
                    </div>       
                <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;Submit</button></div> 
        </div>
             </div>
                </form>
                    </div>
                        </div>
                            </div>
                                <br/><br/>
                                    <Footer/>
                                       </div>

    )
}