import axios from 'axios';
import React,{useState} from "react";
import BackendHomeNavBar from '../Layout/BackendHomeNavBar';
import Footer from '../Layout/footer';

export default function Adminregistration (){
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [sliitid, setsliitid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

  const sendData = async (e) => {
        e.preventDefault();
         let new_admin = {
            name: name,
            phone: phone,
            email: email,
            sliitid:sliitid,
            password:password,
        }
     if (password === cpassword) { 
           axios.post("http://localhost:8070/admin/adminsignup",new_admin)
           .then(()=>{
               alert("Registration Success")
               window.location = "/adminsignin"
        
      }).catch((err)=>{
            alert(err)
     })     
      }else{
         alert("Password dismatch")
     }
        setname("");
        setphone("");
        setEmail("");
        setsliitid("");
        setpassword("");
        setcpassword("");
  }

return (   
    <div>
 <BackendHomeNavBar/><br/><br/><br/>
   <div class="row d-flex align-items-center justify-content-center">
      <div style={{width: 1000,background: "#CFECEC",height:670}}>
         <div class="card-body" >  
           <div><br/>
             <div class="row d-flex align-items-center justify-content-center h-100">
         <div class="col-md-8 col-lg-7 col-xl-6">
     <img src="https://anyconnect.com/wp-content/uploads/login.svg" class="img-fluid" alt="Phone image"/>
<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <u><b>ADMIN&nbsp;&nbsp;SIGNUP</b></u></h2> 
        </div>
             <div class="col-md-7] col-lg-5 col-xl-5 offset-xl-1">
                 <form action="" method="post" name="form" onSubmit={sendData}> 
                      <div class="form-outline mb-4">  
                      <div className="col-md-10">
                   <i className="fa fa-lock"> &nbsp;&nbsp;</i>            
               <label class="form-label"><b>Full Name</b></label>
          <input type="text" name="name" class="form-control " placeholder="Enter your Full Name" 
       onChange={(e) => setname(e.target.value)} required/>
   </div>
</div>
   <div class="form-outline mb-4" >
        <div className="col-md-10">
             <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                 <label class="form-label"><b>SLIIT ID</b></label>
                     <input type="text" name="sliitid" class="form-control " placeholder="Enter your SLIIT ID" 
                         onChange={(e) => setsliitid(e.target.value)} required/> 
                             </div>
                                </div>
                           <div class="form-outline mb-4" >
                    <div className="col-md-10">
             <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                 <label class="form-label"><b>Phone Number</b></label>
                     <input type="text" name="phone" class="form-control " placeholder="Enter your Phone Number" 
                            onChange={(e) => setphone(e.target.value)} required/> 
                             </div>
                                  </div>
                            <div class="form-outline mb-4" >
                     <div className="col-md-10">
             <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                 <label class="form-label"><b>Email Address</b></label>
                     <input type="text" name="email" class="form-control " placeholder="Enter your Email Address" 
                           onChange={(e) => setEmail(e.target.value)} required/> 
                             </div>
                                  </div>
                           <div class="form-outline mb-4" >
                    <div className="col-md-10">
             <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                 <label class="form-label"><b>Password</b></label>
                     <input type="password" name="password" class="form-control " placeholder="Enter your Password" 
                           onChange={(e) => setpassword(e.target.value)} required/> 
                             </div>
                                 </div>
                          <div class="form-outline mb-4" >
                     <div className="col-md-10">
             <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                 <label class="form-label"><b>Confirm Password</b></label>
                     <input type="password" name="cpassword" class="form-control " placeholder="Confirm Password" 
                          onChange={(e) => setcpassword(e.target.value)} required/> 
                             </div>
                                  </div>
                           <button type="submit" class="btn btn-primary">
                      <i className="fa fa-check-circle"> &nbsp;&nbsp;  Sign Up &nbsp;&nbsp;</i></button> &nbsp;&nbsp; &nbsp;&nbsp;
                <label >Already Registered? &nbsp;&nbsp;</label>
          <a href="/adminsignin" >Sign In</a>
              </form>
                  </div> 
                      </div>
                         </div>
                     </div>
                 </div>
              </div> 
          <br/>
      <br/>
<Footer/>
</div>
    )
  }
