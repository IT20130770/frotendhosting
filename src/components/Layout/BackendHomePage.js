import React, { Component } from 'react';
import BackendHomeNavBar from './BackendHomeNavBar';
import Footer from './footer';

export default class BackendHomePage extends Component {
  render() {
    return (
    <div style={{ backgroundColor:"" }} >
    <BackendHomeNavBar/><br/><br/><br/>
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
        </div><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
}