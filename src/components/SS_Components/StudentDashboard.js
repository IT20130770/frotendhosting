import React, { Component } from 'react'
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

const regresearchtopic = () => {
    window.location = `/regtopic/displayresearchtopic`   
}

const reqsupervisor = () => {
    window.location = `/regtopic/displaysupervisors`   
 }

const reqcosupervisor = () => {
    window.location = `/regtopic/displaycosupervisors`     
        }

const submitdoc = () => {
    window.location = `/document/submitdoc`           
        }  

const group = () => {
    window.location = `/groupReg`            
    }   
 
const groupreg = () => {
        window.location = `/groupss`            
        }       

const downloadtemplate = () => {
        window.location = `/pdfdisplay`            
    }       
    
const chatgroups = () => {
        window.location = `/chatdialog`            
    }       
                

export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
          <StudentNavBar/>
             <div style={{ backgroundColor:"black" ,height:"500px"}} >
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
     <div class="carousel-item">
   <img src="https://static.sliit.lk/wp-content/uploads/2022/05/26060204/Microsoft-Imagine-Cup-2022-Team-Nana-Shilpa-of-SLIIT-Faculty-of-Computing.jpg" class="d-block w-100" alt="..."></img>
</div>
   <div class="carousel-item">
      <img src="https://static.sliit.lk/wp-content/uploads/2022/04/28110910/SLIIT-Centre-for-Open-and-Distance-Education.jpg" class="d-block w-100" alt="..."></img>
         </div>
            <div class="carousel-item">
              <img src="https://static.sliit.lk/wp-content/uploads/2018/05/research-slider-n1.jpg" class="d-block w-100" alt="..."></img>
            </div>
         <div class="carousel-item active">
     <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040527/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Software-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>
<div class="carousel-item">
   <img src="https://static.sliit.lk/wp-content/uploads/2022/03/21062316/sliit-main-intake-2022-web-slider-v1.jpg" class="d-block w-100" alt="..."></img>
      </div>
          </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
             </button>
        </div> 
      </div>
   <div className="container" ><br/>
      <div class="row row-cols-1 row-cols-md-3 g-4" > 
        <div class="col" style={{width: "80rem",color:"black"}} >
          <div class="shadow h-60" id="cardcol1">
            <div class="card-body">             
     <h5 class="card-title" id="dashh5" align="left">Notices</h5><br/>  
  <h6 class="card-title"  align="left" >
<i class="fa fa-arrow-circle-right" aria-hidden="true" style={{color:"#FF8C00" ,marginLeft:"50px"}}></i> &nbsp;&nbsp; Faculty of Computing</h6>
  <h6 class="card-title"  align="left">
     <i class="fa fa-arrow-circle-right" aria-hidden="true" style={{color:"#FF8C00" ,marginLeft:"50px"}}></i> &nbsp;&nbsp; School of Business</h6>
  <h6 class="card-title"  align="left">
<i class="fa fa-arrow-circle-right" aria-hidden="true" style={{color:"#FF8C00" ,marginLeft:"50px"}}></i> &nbsp;&nbsp; Faculty of Graduate Studies and Research</h6>
  <h6 class="card-title"  align="left">
     <i class="fa fa-arrow-circle-right" aria-hidden="true" style={{color:"#FF8C00" ,marginLeft:"50px"}}></i> &nbsp;&nbsp; International Program</h6> 
       </div>
          </div>
            </div>

           <div class="col" style={{width: "40rem",color:"white"}} > 
        <div class="shadow h-60" id="cardcol1">
     <div class="card-body" style={{background: "#151B54"}} onClick={group}>
  <h5 class="card-title" id="dashh5"  align="left"><b> Register Groups Name</b></h5>
    </div>
        </div>
           </div>   

             <div class="col" style={{width: "40rem",color:"white"}} > 
          <div class="shadow h-60" id="cardcol1">
      <div class="card-body" style={{background: "#151B54"}} onClick={groupreg} >
 <h5 class="card-title" id="dashh5"  align="left"><b>Register Student Groups</b></h5>
     </div>
        </div>
           </div>

        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={regresearchtopic} >
<h5 class="card-title" id="dashh5" align="left"><b>Register Research Topic</b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={reqsupervisor} >
<h5 class="card-title" id="dashh5" align="left"><b> Request Supervisor</b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={reqcosupervisor} >
<h5 class="card-title" id="dashh5" align="left"><b>Request Co-Supervisor</b></h5>
  </div>
     </div>
        </div>

        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={submitdoc} >
<h5 class="card-title" id="dashh5" align="left"><b>Submit Documents</b></h5>
  </div>
     </div>
        </div>

        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={chatgroups}>
<h5 class="card-title" id="dashh5" align="left"><b>Chat App</b></h5>
  </div>
     </div>
        </div>

        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={downloadtemplate}>
<h5 class="card-title" id="dashh5" align="left"><b>Download Template</b></h5>
  </div>
     </div>
        </div>
           </div>
            </div>
         <br/><br/>
      <Footer/>
  </div>


    )
  }
}
