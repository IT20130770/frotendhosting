import React,{Component} from 'react' ;
import axios from "axios";
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@mui/icons-material/Clear'
import Button from '@material-ui/core/Button';

export default class SupervisorAcceptTopic extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }

//search 
filterData(studentgroups,searchKey){
   const result = studentgroups.filter((studentgroups)=>
   studentgroups.group_name.toLowerCase().includes(searchKey)
   )
   this.setState({studentgroups:result})
 }
 handleSearchArea = (e)=>{
   const searchKey = e.currentTarget.value;
   axios.get("http://localhost:8070/student/displaygroups").then(res=>{
      if(res.data.success){
         this.filterData(res.data.existingGroups,searchKey)
       }
     });
   }
  
   
//retrieve student group details    
componentDidMount(){
        this.retrieveStudentGroups();
    }
     retrieveStudentGroups(){
         axios.get("http://localhost:8070/student/displaygroups").then(res=>{
             if(res.data.success){
                 this.setState({
                     studentgroups:res.data.existingGroups
                 });
                 console.log(this.state.studentgroups)
             }
         })
     }

//Accept supervisor request topics 
    acceptTopic(id){
       console.log(id);
        axios.post(`http://localhost:8070/group/requestsupervisor/${id}/Accepted`).then(res=>{
            alert("Topic Accepted");
            window.location.href="/requestsupervisor"
      }).catch((e)=>{
          console.log(e);
      })

    }
    
//Reject supervisor request topics
    rejectTopic(id){
        console.log(id);
     axios.post(`http://localhost:8070/group/requestsupervisor/${id}/Rejected`).then(res=>{
        alert("Topic Rejected");
        window.location.href="/requestsupervisor"    
     }).catch((e)=>{
           console.log(e);
  })
}

render(){
      return( 
         <div>
         <StaffNavbar/>  <br/><br/> <br/>
            <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Accept Supervisor Request</u></b></h3><br/><br/>
               <div className='container'>  
                 <div className="col-md-3" >
                    <input type="text" className="form-control" style={{marginBottom:'2px'}} placeholder="Search " onChange={this.handleSearchArea}/>
                       <br/> 
                         </div>                        
                           <table class="table">
                        <thead>
                    <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
            <th scope='col'>Group Name</th>
        <th scope='col'>Research Feild</th>
     <th scope='col'>Research Topic</th>
  <th scope='col'>Supervisor Name</th>
     <th scope='col'>Status</th>
       <th scope='col'>Accept</th>
          <th scope='col'>Reject</th>
             </tr>
                </thead>
                   <tbody>
                       {this.state.studentgroups.map((studentgroups,index) =>(
                           <tr>
                             <th scope='row'>{index + 1}</th>
                          <td>{studentgroups.group_name}</td>
                      <td>{studentgroups.researchField}</td>
                  <td>{studentgroups.researchTopic}</td>
              <td>{studentgroups.grpSupervisor}</td>
                <td >
                {
                  studentgroups.supervisortopicstatus === "Accepted" &&
                  <div><Button style={{color:"green",fontFamily:"sans-serif"}}><b> { studentgroups.supervisortopicstatus}</b></Button></div>

                  }
                  {
                      studentgroups.supervisortopicstatus === "Rejected" &&
                      <div><Button style={{color:"#9F000F",fontFamily:"sans-serif"}}><b>{studentgroups.supervisortopicstatus}</b></Button></div>

                  }
                  </td>
                   <td>                       
                      <IconButton aria-label='btn btn-success' size="small"
                         style={{background: "#008000"}}
                            onClick={()=>{this.acceptTopic(studentgroups._id)}}>
                               <CheckIcon  fontSize="small" style={{color: "white"}}/>
                                  </IconButton> 
                                     </td>
                                  <td>
                               &nbsp;&nbsp;
                            <IconButton aria-label="delete" size="small"
                        style={{background: "#9F000F"}}
                    onClick={()=>{this.rejectTopic(studentgroups._id)}}>
                 <ClearIcon fontSize="small"  style={{color: "white"}}/>
             </IconButton>
               </td>
                  </tr>
                     ))}
                       </tbody>
                          </table>
                             </div>     
                                </div>   
        )}
}