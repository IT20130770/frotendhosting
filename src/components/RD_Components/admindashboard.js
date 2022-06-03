import React, { Component } from 'react'
import AdminNavBar from '../Layout/AdminNavBar';
import Footer from '../Layout/footer';


const supervisorList = () => {
  window.location = `/getsupervisor`
}

const cosupervisorList = () => {
  window.location = `/getcosupervisor`
}
const panelMemberList = () => {
  window.location = `/getpanelmember`
}
const studentList = () => {
  window.location = `/getstudent`
}
const createmarkingschemes = () => {
  window.location = `/presantation`
}
const studentgroups = () => {
  window.location = `/group/displaystudentgroups`
}
const uploadFile = () => {
  window.location = `/pdfupload`
}
const faculties = () => {
  window.location = `/#`
}


export default class admindashboard extends Component {
  render() {
    return (
      <div>
        <AdminNavBar/>
        <div style={{ backgroundColor:"black" ,height:"500px"}} >
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
     <div class="carousel-item">
   <img src="https://static.sliit.lk/wp-content/uploads/2020/10/29121536/pdp-sliit.jpg" class="d-block w-100" alt="..."></img>
</div>
   <div class="carousel-item">
      <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040608/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Data-Science.jpg" class="d-block w-100" alt="..."></img>
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
     <div class="card-body" style={{background: "#151B54"}} onClick={supervisorList} >
  <h5 class="card-title" id="dashh5"  align="left"><b>  Supervisor List</b></h5>
    </div>
        </div>
           </div>   
             <div class="col" style={{width: "40rem",color:"white"}} > 
          <div class="shadow h-60" id="cardcol1">
      <div class="card-body" style={{background: "#151B54"}} onClick={cosupervisorList}>
 <h5 class="card-title" id="dashh5"  align="left"><b>Co-Supervisor List </b></h5>
     </div>
        </div>
           </div>
         <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
   <div class="card-body" style={{background: "#151B54"}} onClick={panelMemberList}>
<h5 class="card-title" id="dashh5"  align="left"><b>Panel Member List </b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={studentList}  >
<h5 class="card-title" id="dashh5" align="left"><b>  Student List</b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={createmarkingschemes}>
<h5 class="card-title" id="dashh5" align="left"><b> Upload Marking Schemes </b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={studentgroups}>
<h5 class="card-title" id="dashh5" align="left"><b>Student Grops </b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} onClick={uploadFile} >
<h5 class="card-title" id="dashh5" align="left"><b>Upload File </b></h5>
  </div>
     </div>
        </div>
        <div class="col" style={{width: "40rem",color:"white"}} > 
      <div class="shadow h-60" id="cardcol1">
  <div class="card-body" style={{background: "#151B54"}} >
<h5 class="card-title" id="dashh5" align="left"><b>Course Overview</b></h5>
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
