import React,{Component} from 'react' ;
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Button from '@material-ui/core/Button';

export default class Add_supervisor extends Component{
   constructor(props){  
       super(props);

       this.onChangeGrpSupervisor = this.onChangeGrpSupervisor .bind(this);
       this.onSubmit = this.onSubmit.bind(this);

       this.state={
           group_name:"",
           researchTopic:"",
           researchField:"",
           grpSupervisor:"",
           supervisors:[]
       }
    }
 
  async componentDidMount(){
    const feild = this.props.match.params.feild
    const id = this.props.match.params.id
      
       await axios.get(`http://localhost:8070/regtopic/getsupervisor/${feild}`).then((res)=>{
      
       if(res.data.success){
               this.setState({
                supervisors:res.data.staff
              })
              console.log (this.state.supervisors)
         }
       })
    }
    onChangeGrpSupervisor(e) {
      this.setState({
        grpSupervisor: e.target.value
      })
    }
 
   onSubmit = (e)=>{
       e.preventDefault();
       const id = this.props.match.params.id;
       const data = {
        grpSupervisor:this.state.grpSupervisor,
       }
 
       axios.post(`http://localhost:8070/regtopic/addSupervisor/${id}`,data).then((res)=>{ 
        console.log(res.data)
        alert("Supervisor Requested");
        window.location.href="/regtopic/displaysupervisors"
   })
   .catch((e)=>{
   });
}

render(){
  return(

<div>
<StudentNavBar/>
   <br/><br/> 
      <div align="center">
         <div className="card-header" style={{width:"820px",background:"#B7CEEC"}}><br/><br/>
            <h3 align="center">
           <b><u>ADD SUPERVISOR TO STUDENT GROUP</u></b></h3>
       <form onSubmit={this.onSubmit} className="text-color">
   <div className="form-group">
<div align="left"><br/> 
   <label style={{marginBottom:'2px'}}><b> Supervisor Name</b></label>
      <input type="userInput" required className="form-control mt-2" placeholder="Enter Supervisor Name" value={this.state.grpSupervisor}
         onChange={this.onChangeGrpSupervisor}/>
           </div></div><br/><br/>
               <Button variant="contained" className="w-6" style={{background: "#151B54", width: 30+"%",color:"white"}}
                   disableElevation type="submit">Request Supervisor</Button>
                     </form>
                  <br/>
              </div>   
           </div>
        <div>
            <br/>
               <br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
                      <b><u> Supervisors </u></b></h3><br/>
                        <div className='container'>  
                     <table className = "table table-hover">
                 <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                    <th scope='col'>Role</th>
                       <th scope='col'>Name</th>
                          <th scope='col'>E-mail</th>
                             <th scope='col'>Research Feild</th>
                           </tr>
                        </thead>
                     <tbody>
                 {this.state.supervisors.map((supervisors,index)=>(
              <tr key={index}>    
                <th scope='row'>{index + 1}</th>
                   <td>{supervisors.role}</td>
                      <td>{supervisors.name}</td>
                        <td>{cosupervisors.email}</td>
                           <td>{supervisors.feild}</td>
                              </tr>
                                    )
                                  )}
                           </tbody>     
                       </table>
                    </div>
                 </div>
          </div>
       )
   }
}