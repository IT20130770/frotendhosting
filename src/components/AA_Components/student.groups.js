import React,{Component} from 'react' ;
import axios from "axios";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

export default class Groupss extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }
    onReadirect(id){
        window.location.href = `/display/${id}`
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
    render(){
        return(    
            <div>
             <StudentNavBar/><br/><br/><br/><br/>
               <div align="center">
              
                  <h3 align="center">
                   <b><u>Student Research Group</u></b></h3><br/>
               <form className='needs-validation'>
           <div className="col-lg-10 mt-2">    
        <div align="left">
            <div className='container'>  
                <table class="table" style={{background:"#ffff"}}>
                    <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Group Name</th>
         <th scope='col'>Add Group Member</th>
           </tr>
             </thead>
                <tbody>
                {this.state.studentgroups.map((studentgroups,index) =>(
                    <tr>
                      <th scope='row'>{index + 1}</th>
                        <td>{studentgroups.group_name}</td>
                           <td >
                    <Button aria-label='btn btn-success' size="small"
                style={{background: "#FBB917", width: 15+"%",}}
             onClick={()=>this.onReadirect(studentgroups._id)} >
                   <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                      </Button>
                         &nbsp;&nbsp;&nbsp;&nbsp;                           
                        </td>
                    </tr>
                ))}
                </tbody>    
            </table>
               </div>
                 </div>
                   </div>
                      </form>     
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>  
            </div> 
        )}
}