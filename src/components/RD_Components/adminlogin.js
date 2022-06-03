import axios from 'axios';
import React, { Component } from 'react';
import BackendHomeNavBar from '../Layout/BackendHomeNavBar';
import Footer from '../Layout/footer';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.userLoginSubmit = this.userLoginSubmit.bind(this)
        this.state = {
          sliitid: "",
          password: "",
          token: "",
          open: false
        }
      }  

      async userLoginSubmit(e) {
        e.preventDefault()
        const userData = {
          sliitid: this.state.sliitid,
          password: this.state.password
        }
   
    await axios.post("http://localhost:8070/admin/adminsignin",userData)
      .then((res) => {
        this.setState({
         token: res.data.token
      })
        localStorage.setItem("Authorization", res.data.token)
        alert("Login Successfull!!");
        window.location = "/admindashboard";
          
        })
        .catch((err) => {
          console.log(err)
          this.setState({open: true})
          alert("Loging error");
        })
      }
   
      handleClose(reason) {
        if (reason === 'clickaway') {
         return;
        }
        this.setState({open: false})
     };

  render() {
    return (
     <div>
        <BackendHomeNavBar/><br/><br/><br/><br/>
           <div class="row d-flex align-items-center justify-content-center">
              <div style={{width: 1000,background: "#CFECEC",height:500}}>
                 <div class="card-body" >  
                   <div class="container py-5 h-90" > 
                    <div class="row d-flex align-items-center justify-content-center h-100">      
                 <div class="col-md-8 col-lg-7 col-xl-6"> 
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/global-data-security-4897432-4077844.png" class="img-fluid" alt="Phone image"/> 
          <br/><br/>
       <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <u><b>ADMIN&nbsp;&nbsp;LOGIN</b></u></h2> 
               </div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={this.userLoginSubmit} name="form"> 
                            <div class="form-outline mb-4">  
                                <div className="col-md-9">
                             <i className="fa fa-lock"> &nbsp;&nbsp;</i>            
                         <label class="form-label"><b>SLIIT ID </b></label>
                    <input type="text" name="sliitid" class="form-control " placeholder="Enter your SLIIT ID" 
                 onChange={e => this.setState({ sliitid: e.target.value })} required/>
             </div>
          </div>
             <div class="form-outline mb-4" >
                  <div className="col-md-9">
                       <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                           <label class="form-label"><b>PASSWORD</b></label>
                               <input type="password" name="password" class="form-control " placeholder="Enter your Password" 
                                    onChange={e => this.setState({ password: e.target.value })} required/> 
                                       </div>
                                     </div>
                                <button type="submit" class="btn btn-primary">
                            <i className="fa fa-check-circle"> &nbsp;&nbsp;  Sign in &nbsp;&nbsp;</i></button>
                      <div class="divider d-flex align-items-center my-4">
                  <center><label >Not Registered? &nbsp;&nbsp;</label>
              <a href="/adminsignup" >Sign Up</a> </center> 
                  </div>
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
}