import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class StudentNavBar extends Component {
  render() {
    return (
        <div>   
        <nav class="navbar navbar-expand-lg " style={{background: "#0C090A	",  height: "89px"}}>
        <button class="navbar-brand" style={{background: "#FFA500",height: "90px",width:"250px"}} ><b>SLIIT  ResearchWeb</b></button>  
 
        <div class="container">  
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
 
      
         <li class="nav-item">
           <a class="nav-link" aria-current="page" href="/topic/displayresearchtopic" style={{color: "#ffff"}}></a>
         </li>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Faculties</b> </a>
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
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
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
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Libraries</b> </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
             <li><a class="dropdown-item" href="#">SLIIT Online Library</a></li>
             <li><a class="dropdown-item" href="#">Digital Library</a></li>
             <li><a class="dropdown-item" href="#">Research & Publication</a></li>
           </ul>      
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#ffff"}}>
            <b>Suport Services</b> </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: "#ffff	"}}>
             <li><a class="dropdown-item" href="#">G Suites (Gmail)</a></li>
             <li><a class="dropdown-item" href="#">0365 (Microsoft)</a></li>
           </ul>      
         </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
       </ul>
       
             <IconButton type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal">
             <i class="fa fa-user-circle fa-lg  mt-3 fa-2x"  aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i>  &nbsp;&nbsp;&nbsp;&nbsp;     
             </IconButton>
 
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
             <div class="modal-content">
             <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">LOGIN AS </h5>         
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
           
             <div class="modal-body" align="right">
             <Button
                   href='/signin'
                   style={{ color:"white",background:"#990012" }}
                   variant="outlined"
                   startIcon={<AccountCircleIcon />}
                 >
                Student
               </Button>   &nbsp;&nbsp;
 
               <Button
                   href='/staff'
                   style={{ color:"white",  background:"#4B0150" }}
                   variant="outlined"
                   startIcon={<AccountCircleIcon />}
                 >
                SLIIT Staff
               </Button>     
               </div>
             </div>
           </div>
         </div>
       
       </div>
     </div>
   </nav>
  </div>
    )
  }
}