import React,{Component} from 'react' ;
import axios from "axios";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AdminNavBar from '../Layout/AdminNavBar';

export default class Display_studentgroups extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }
    onReadirect(id){
        window.location.href = `/studentgroups/${id}`
    }
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

//delete panel members assigned student groups
onDelete = (id)=>{
    if (window.confirm('Are you sure you wish to delete panel member?')) {
        axios.delete(`http://localhost:8070/group/delete/${id}`).then((res)=>{
        alert("Panel Member Deleted Successfully");
          this.retrieveStudentGroups();
        })
      }}

    render(){
        return(    
                     <div>
                  <AdminNavBar/>  <br/><br/> <br/>
                <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Add Panel Members </u></b></h3><br/><br/>
                  <div className='container'>  
                    <table class="table">
                       <thead>
                       <tr bgcolor="#79BAEC">
                   <th scope='col'>No</th>
               <th scope='col'>Group Name</th>
           <th scope='col'>Research Feild</th>
        <th scope='col'>Research Topic</th>
    <th scope='col'>Panel Member</th>
       <th scope='col'>Actions</th>
            </tr>
                </thead>
                    <tbody>
                         {this.state.studentgroups.map((studentgroups,index) =>(
                             <tr>
                                <th scope='row'>{index + 1}</th>
                             <td>{studentgroups.group_name}</td>
                         <td>{studentgroups.researchField}</td>
                     <td>{studentgroups.researchTopic}</td>
                 <td>{studentgroups.panelMember}</td>
                        <td>                       
                             <IconButton aria-label='btn btn-success' size="small"
                                style={{background: "#FBB917"}}
                                   onClick={()=>this.onReadirect(studentgroups._id)} >
                                      <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                                         </IconButton> 
                                             &nbsp;&nbsp;&nbsp;&nbsp;                           
                                         <IconButton aria-label="delete" size="small"
                                      style={{background: "#800000"}} onClick={()=>this.onDelete(studentgroups._id)} >
                                  <DeleteForeverIcon fontSize="small"  style={{color: "white"}}/>
                             </IconButton>
                        </td>
                    </tr>
                ))}
        </tbody>
            </table>
               </div>     
                  </div>  
        )
    }
}