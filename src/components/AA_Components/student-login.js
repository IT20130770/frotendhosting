import React,{Component} from "react";
import axios from 'axios';
import StudentNavBar from '../Layout/StudentHomeNavBar';
import Footer from '../Layout/footer';

export default class StudentLogin extends Component {
    constructor(props) {
      super(props);
      this.userLoginSubmit = this.userLoginSubmit.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.state = {
        student_id: "",
        pwd: "",
        token: "",
        open: false
      }
    }
    async userLoginSubmit(e) {
      e.preventDefault()
      const userData = {
        student_id: this.state.student_id,
        pwd: this.state.pwd
      }

 await axios.post("http://localhost:8070/student/login",userData)
      .then((res) => {
        this.setState({
          token: res.data.token
        }) 
        localStorage.setItem("Authorization", res.data.token)
           window.location = "/studentdashboard"
           alert('Loging Successfull');
      })
      .catch((err) => {
           console.log(err)
           this.setState({open: true})
            alert('loging unsucces',err);
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
          <StudentNavBar/><br/><br/><br/>
            <div class="row d-flex align-items-center justify-content-center">
              <div style={{width: 1000,background: "#E6E6FA",height:500}}>
                 <div class="card-body" >  
                   <div class="container py-5 h-90" > 
                    <div class="row d-flex align-items-center justify-content-center h-100">      
                 <div class="col-md-8 col-lg-7 col-xl-6"> 
             <img src="https://peddleup.com/assets/images/bg-login.png" class="img-fluid" alt="Phone image"/> 
          <br/><br/>
       <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <u><b>STUDENT&nbsp;&nbsp;LOGIN</b></u></h2> 
               </div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={this.userLoginSubmit}  name="form"> 
                            <div class="form-outline mb-4">  
                                <div className="col-md-9">
                             <i className="fa fa-lock"> &nbsp;&nbsp;</i>            
                         <label class="form-label"><b>STUDENT ID </b></label>
                    <input type="text" name="username" class="form-control " placeholder="Enter your Student ID" 
               onChange={e => this.setState({ student_id: e.target.value })} required/>
             </div>
          </div>
             <div class="form-outline mb-4" >
                  <div className="col-md-9">
                       <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                           <label class="form-label"><b>PASSWORD</b></label>
                               <input type="password" name="password" class="form-control " placeholder="Enter your Password" 
                                    onChange={e => this.setState({ pwd: e.target.value })} required/> 
                                       </div>
                                     </div>
                                <button type="submit" class="btn btn-primary">
                            <i className="fa fa-check-circle"> &nbsp;&nbsp;  Sign in &nbsp;&nbsp;</i></button>
                      <div class="divider d-flex align-items-center my-4">
                  <center><label >Not Registered? &nbsp;&nbsp;</label>
              <a href="/signup" >Sign Up</a> </center> 
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
                       <br/>
                          <Footer/>
                             </div>
      )
    }
  }