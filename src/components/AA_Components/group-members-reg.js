import React,{Component} from 'react' ;
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

export default class Add_Group_Members extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            groupMembers: []
          }
        }
      

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/student/display/${id}`)
        .then((res) => {
          this.setState({groupMembers: res.data.groupMembers})
        })
        .catch((err) => {
          alert(err.message)
        })  
        console.log(this.state.groupMembers)
      }

      
    onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id; 
        const{student_id,name,email,phone} = this.state;
        const data = {
            student_id:student_id,
            name:name,
            email:email,
            phone:phone,
        }

        const config = {
            headers: {
              Authorization: localStorage.getItem("Authorization"),
            },
          };

        axios.post(`http://localhost:8070/student/groupReg/${id}`,data, config).then((res)=>{  
          alert('Added You To This Group Successfully')
          window.location.reload();
        if(res.data.success){
            this.setState({
                student_id:"",
                name:"",
                email:"" ,
                phone:"",
                
           })
          }    
    })
    .catch((e)=>{
      alert('Error with Registering member',e.message)
    });
}
  
      render(){
        return(
          <div>
            <StudentNavBar/><br/>
              <div align="right" style={{marginRight:"75px"}}>
                <button
                   className='btn btn-warning'
                     type='add' 
                      style={{marginTop:'15px'}}
                    onClick={this.onSubmit}>
                <i className='fa fa-plus-circle'></i> &nbsp; ADD ME TO THIS GROUP
             </button> 
          </div>  
        <br/>
           <h2 align="center"><b><u> Group Member Details</u></b></h2>
             <div align="center">
                <div style={{width:"1000px"}}><br/><br/>
                   <table class="table">
                       <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Student ID</th>
         <th scope='col'>name</th>
     <th scope='col'>Phone Number</th>
       <th scope='col'>Email</th>
         </tr>
            </thead>
            <tbody>
                {this.state.groupMembers.map((groupMembers,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{groupMembers.student_id}</td>
                        <td>{groupMembers.name}</td>
                        <td>{groupMembers.phone}</td>
                        <td>{groupMembers.email}</td>

                    </tr>
                ))}
                 </tbody>              
              </table><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  
            </div> </div><Footer/></div>
        )
    }
}
