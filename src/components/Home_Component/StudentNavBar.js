import React, { Component } from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

export default class StudentNavBar extends Component {
    render(){
        return(
     
    <div> 
       <nav class="navbar navbar-expand-lg " style={{background: "#060b26",  height: "100px"}}>
       <br/>  <br/>   
       <button class="navbar-brand" style={{background: "#FFA500",height: "100px",width:"220px"}} ><b>SLIIT  ResearchWeb</b></button>  
       &nbsp;&nbsp;&nbsp;
       <div class="container">  
       <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 

       <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/studentdashboard" style={{color: "#ffff"}}><b>Dashboard</b></a>
        </li>  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/groups" style={{color: "#ffff"}}><b>FeedBack</b></a>
        </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Faculties</b></a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
            <li><a class="dropdown-item" href="#">Faculty of Computing</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Business</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Engineering</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Humanities & Sciences</a></li>
            <li><a class="dropdown-item" href="#">School of Architechture</a></li>
            <li><a class="dropdown-item" href="#">Faculty of Graduate Studies and Research</a></li>
            <li><a class="dropdown-item" href="#">SLIIT Academy</a></li>
            <li><a class="dropdown-item" href="#">SLIIT International</a></li>

          </ul>      
        </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Resources</b> </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
             <li><a class="dropdown-item" href="#">Eduscope</a></li>
             <li><a class="dropdown-item" href="#">AutoDesk</a></li>
             <li><a class="dropdown-item" href="#">Sysco Network Academy</a></li>
             <li><a class="dropdown-item" href="#">Microsoft Imagine</a></li>
             <li><a class="dropdown-item" href="#">Github Student Support</a></li>
             <li><a class="dropdown-item" href="#">Faculty of Graduate Studies and Research</a></li>
             <li><a class="dropdown-item" href="#">AWS Educate</a></li>
           </ul>      
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 

         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Libraries</b> </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
             <li><a class="dropdown-item" href="#">SLIIT Online Library</a></li>
             <li><a class="dropdown-item" href="#">Digital Library</a></li>
             <li><a class="dropdown-item" href="#">Research & Publication</a></li>
           </ul>      
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Suport Services</b> </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
             <li><a class="dropdown-item" href="#">Faculties</a></li>
             <li><a class="dropdown-item" href="#">Student Afires</a></li>
             <li><a class="dropdown-item" href="#">Examination</a></li>
             <li><a class="dropdown-item" href="#">Career Guidance</a></li>
             <li><a class="dropdown-item" href="#">Time Tables</a></li>
             <li><a class="dropdown-item" href="#">Student IT services</a></li>
           </ul>      
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      </ul>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> </form>  &nbsp;&nbsp;
            <i class="fa fa-search fa-lg" aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i> &nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton aria-label="profile" href="/profile" style={{color: "#FFFFFF"}} >
            <PersonIcon fontSize="large" />
            </IconButton> 

      </div>
    </div>
  </nav>
 </div>
        )
    }
}