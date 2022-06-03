import React,{Component} from 'react' ;
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Button from '@material-ui/core/Button';

export default class Add_co_supervisor extends Component{
   constructor(props){  
       super(props);

       this.onChangeGrpcoSupervisor = this.onChangeGrpcoSupervisor .bind(this);
       this.onSubmit = this.onSubmit.bind(this);  

       this.state={
           group_name:"",
           researchTopic:"",
           researchField:"",
           grpSupervisor:"",
           grpcoSupervisor:"",
           cosupervisors:[]
       }
    }
    
  async componentDidMount(){
       const feild = this.props.match.params.feild
       const id = this.props.match.params.id;

       await axios.get(`http://localhost:8070/regtopic/getcosupervisor/${feild}`).then((res)=>{
       if(res.data.success){
               this.setState({
                cosupervisors:res.data.staff
            });
            console.log (this.state.cosupervisors)
           }
         })
       }
    
   onChangeGrpcoSupervisor(e) {
        this.setState({
            grpcoSupervisor: e.target.value
        })
      }
 
   onSubmit = (e)=>{
       e.preventDefault();

       const id = this.props.match.params.id;
       const data = {
           grpcoSupervisor:this.state.grpcoSupervisor,
       }

         axios.post(`http://localhost:8070/regtopic/addcoSupervisor/${id}`,data).then((res)=>{ 
            console.log(res.data)
            alert("Co-Supervisor Requested");
            window.location.href="/regtopic/displaycosupervisors"
  
        })
   .catch((e)=>{
   });
}

 render(){
return(
<div>
   <StudentNavBar/>
     <br/><br/><br/>
        <div align="center">
           <div className="card-header" style={{width:"820px",background:"#B7CEEC"}}><br/><br/>
              <h3 align="center">
                <b><u>ADD CO-SUPERVISOR TO STUDENT GROUP</u></b></h3><br/>
            <form onSubmit={this.onSubmit} className="text-color">
        <div className="form-group">
    <div align="left"><br/> 
        <label style={{marginBottom:'2px'}}><b>Co-Supervisor Name</b></label>
            <input type="userInput" required className="form-control mt-2" placeholder="Enter Co-Supervisor Name" value={this.state.grpcoSupervisor}
                 onChange={this.onChangeGrpcoSupervisor}/>
                    </div></div><br/><br/>
                 <Button variant="contained" className="w-6" style={{background: "#151B54", width: 30+"%",color:"white"}}
            disableElevation type="submit">Request Co-Supervisor</Button>
        </form><br/>
          </div>
              </div>
                 <div>
                     <br/>
                      <br/>
                   <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
               <b><u> Co-Supervisors List</u></b></h3><br/>
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
                {this.state.cosupervisors.map((cosupervisors,index)=>(
             <tr key={index}>    
                  <th scope='row'>{index + 1}</th>
                       <td>{cosupervisors.role}</td>
                           <td>{cosupervisors.name}</td>
                              <td>{cosupervisors.email}</td>
                                  <td>{cosupervisors.feild}</td>
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