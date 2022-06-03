import React, { Component } from 'react';
import StudentNavBar from '../Layout/StudentHomeNavBar';
import Footer from '../Layout/footer';

export default class StudentHomePage extends Component {
  render() {
    return (
   <div>
   <StudentNavBar/>
   <div style={{ backgroundColor:"black" ,height:"500px"}} >

   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06050102/SLIIT-BSc-Engineering-Hons-in-Electrical-Electronic-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/13103724/BBA-Hons-Specialising-in-Marketing-Management.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://www.sliit.lk/wp-content/uploads/2018/03/sliit-convercation-1.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item active">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040527/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Software-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2022/03/31081852/SLIIT-Nursing-intake-20221.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2022/03/31054515/SLIIT-law-intake-2022.jpg" class="d-block w-100" alt="..."></img>
  </div>


  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06050827/SLIIT-BSc-Engineering-Hons-in-Materials-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040550/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Cyber-Security.jpg" class="d-block w-100" alt="..."></img>
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
</div> <br/> 
</div>
  <div className="container" ><br/>
    <div class="row row-cols-1 row-cols-md-3 g-4" > 
       <div class="col" style={{width: "62rem" ,color:"black"}} > 
         <div class="shadow h-40" id="cardcol1">
           <div class="card-body" style={{background: "#ffff"}} >  
        <h5 class="card-title" id="dashh5"  align="left" style={{fontFamily:"revert",fontSize:"25px" , color:"#191970"}} ><b> <u>SLIIT Research</u></b></h5><br/>
    <p align="left" style={{fontFamily:"revert-layer"}}>As a leading tertiary educational Institute in Sri Lanka, research is an integral part of SLIIT.We strive for a vibrant research culture and numerous initiatives are in place for programming research among the academic and student communities.</p>
  <p align="left" style={{fontFamily:"revert-layer"}}>Integrating research methodology to undergraduate and postgraduate curricula, establishing a research center to carry out research work, the SLIIT research grant scheme is all meant to promote research.</p>
    <p align="left" style={{fontFamily:"revert-layer"}}><i class="fa fa-user"  style={{color: "#9F000F",marginLeft:"45px"}}  aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Faculty of Business</p>
       <p align="left" style={{fontFamily:"revert-layer"}}><i class="fa fa-laptop"  style={{color: "#0000CD",marginLeft:"40px"}}  aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Faculty of Computing</p>
          <p align="left" style={{fontFamily:"revert-layer"}}><i class="fa fa-building"  style={{color: "#006400",marginLeft:"45px"}}  aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Faculty Of Engineering</p>
             <p align="left">Marketing and Organizational productivity | Tertiary Education Landscape | Productivity in the SME Sector | Business Finance and IS applications, Business Intelligence | Computational Linguistics, Big Data Management | Artificial Intelligence | Cloud Computing | Data Communication | Data Science | e-Society | Health Informatics | High Performance Computing | Image Processing | Information Security | Robotics and Intelligent Systems | Software Engineering | Computer Vision/Industrial Automation | Sustainable Built Environment | Industrial Engineering and Operations Management</p>
               </div>
                 </div>
            </div>

           <div class="col" style={{width: "20rem"}} > 
        <div class="shadow h-60" id="cardcol1">
    <div class="card-body">
</div>
    <img
      src="https://static.sliit.lk/wp-content/uploads/2019/09/11072728/SLIIT-the-next-you-slider-6.jpg"
        class="card-img-top"
           height="450px"
             alt="..." />
             </div>
               </div>
               </div>
             </div><br/>
             <div style={{width: "100rem",color:"white"}} > 
          <div id="cardcol1">
      <div class="card-body" style={{background: "#151B54"}} >
<i class="fa fa-phone"  style={{color: "#ffff",marginLeft:"45px",fontSize:"30px"}}  aria-hidden="true">&nbsp;&nbsp;&nbsp;
  +94 11 754 4801 </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <i class="fa fa-envelope"  style={{color: "#ffff",marginLeft:"45px",fontSize:"30px"}}  aria-hidden="true">&nbsp;&nbsp;&nbsp;
       INFO@SLIIT.LK </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class=" fa fa-map-marker"  style={{color: "#ffff",marginLeft:"45px",fontSize:"30px"}}  aria-hidden="true">&nbsp;&nbsp;&nbsp;
           NEW KANDY ROAD, MALABE </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </div>
              </div>
                </div>
      
  <Footer/>
      </div>
    )
  }
}
