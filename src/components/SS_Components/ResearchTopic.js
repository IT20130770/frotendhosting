import React,{Component} from 'react' ;
import axios from "axios";
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import CheckIcon from '@mui/icons-material/Check';
import Button from '@material-ui/core/Button';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';


export default class ResearchTopic extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
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

//Accept research topics 
    acceptTopic(id){
       console.log(id);
        axios.post(`http://localhost:8070/group/accepttopic/${id}/Accepted`).then(res=>{
            alert("Topic Accepted");
            window.location.href="/topic/displayresearchtopic"
      }).catch((e)=>{
          console.log(e);
      })

    }
    
//Reject research topics
    rejectTopic(id){
        console.log(id);
     axios.post(`http://localhost:8070/group/accepttopic/${id}/Rejected`).then(res=>{
        alert("Topic Rejected");
        window.location.href="/topic/displayresearchtopic"    
     }).catch((e)=>{
           console.log(e);
  })
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
 
//redirect add frrdback page
onReadirect(id){
    window.location.href = `/addfeedback/${id}`
}

render(){
      return( 
        <div>
        <StaffNavbar/>  <br/><br/> <br/>
           <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Research Topic Details</u></b></h3><br/><br/>
              <div className='container'> 
                <div className="col-md-3" >
                  <input type="text" className="form-control" style={{marginBottom:'2px'}} placeholder="Search Group Name " onChange={this.handleSearchArea}/>
                   <br/> 
                     </div>    
                        <table class="table">
                      <thead>
                   <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
              <th scope='col'>Group Name</th>
           <th scope='col'>Research Feild</th>
        <th scope='col'>Research Topic</th>
     <th scope='col'>Status</th>
 <th scope='col'>FeedBack</th>
   <th scope='col'>Accept</th>
      <th scope='col'>Reject</th>
        <th scope='col'>Add</th>
            </tr>
                </thead>
                  <tbody>
                      {this.state.studentgroups.map((studentgroups,index) =>(
                          <tr>
                            <th scope='row'>{index + 1}</th>
                          <td>{studentgroups.group_name}</td>
                      <td>{studentgroups.researchField}</td>
                 <td>{studentgroups.researchTopic}</td>
                 <td> 
                {
                 studentgroups.topicstatus === "Accepted" &&
                 <div><Button style={{color:"green",fontFamily:"sans-serif"}}><b> { studentgroups.topicstatus}</b></Button></div>

                 }
                 {
                     studentgroups.topicstatus === "Rejected" &&
                     <div><Button style={{color:"#9F000F",fontFamily:"sans-serif"}}><b>{studentgroups.topicstatus}</b></Button></div>

                 }
                 </td>
            
               <td>{studentgroups.feedback}</td>
                  <td>                       
                     <IconButton aria-label='btn btn-success' size="small"
                        style={{background: "#008000"}}
                           onClick={()=>{this.acceptTopic(studentgroups._id)}}>
                              <CheckIcon  fontSize="small" style={{color: "white"}}/>
                                 </IconButton> 
                                    </td>
                                 <td>
                         <IconButton aria-label="delete" size="small"
                   style={{background: "#9F000F"}}
             onClick={()=>{this.rejectTopic(studentgroups._id)}}>
         <ClearIcon fontSize="small"  style={{color: "white"}}/>
            </IconButton>
              </td>
                  <td>
                  <IconButton aria-label='btn btn-success' size="small"
            style={{background: "#FBB917"}}
        onClick={()=>this.onReadirect(studentgroups._id)} >
          <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
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