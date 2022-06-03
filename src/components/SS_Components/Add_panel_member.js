import React,{Component} from 'react' ;
import axios from "axios";
import PanelMembers from '../SS_Components/PanelMembers';
import AdminNavBar from '../Layout/AdminNavBar';

export default class Add_panel_member extends Component{
 
    constructor(props){   
        super(props);
        this.state={
            group_name:"",
            panelMember:"",
        }
     } 
   async componentDidMount(){
        const id = this.props.match.params.id; 
        await axios.get(`http://localhost:8070/student/display/${id}`).then((res)=>{

        if(res.data.success){
                this.setState({
                    groupName:res.data.studentgroups.group_name
               })
          }
        })
     }
    handleInputChange = (e)=>{
        const{name,value} = e.target;
        this.setState({
           ...this.state,
           [name]:value
        })
     }

    onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id; 
        const{group_name,panelMember} = this.state;
        const data = {
            group_name:group_name,
            panelMember:panelMember,
        }

        axios.post(`http://localhost:8070/group/studentgroups/${id}`,data).then((res)=>{  
        if(res.data.success){
            this.setState({
                group_name:"",
                panelMember:"" ,
           })
           alert("Panel member added");
           window.location.href="/group/displaystudentgroups"
      }    
    })
    .catch((e)=>{
    });
}
  
render(){
return( 
<div>
<AdminNavBar/> 
   <br/><br/>    
        <div className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>ADD PANEL MEMBER TO STUDENT GROUP</h1>
              <form className='needs-validation' noValidate>
                  <div className='form-group' style={{marginBottom:'10px'}}>
                     <label style={{marginBottom:'5px'}}>Panel Member Name</label>
                       <input
                          type="text" 
                            className='form-control'
                               name='panelMember'
                                 placeholder='Enter Panel Member Name'
                                     value={this.state.panelMember}
                               onChange={this.handleInputChange}>
                           </input>
                       </div>
                  <button
              className='btn btn-warning'
          type='add' 
       tyle={{marginTop:'15px'}}
           onClick={this.onSubmit}>
              <i className='fa fa-plus-circle'></i> &nbsp; ADD
                 </button>
                    </form>    
                        </div>
                           <PanelMembers/>
                               </div>
        )
    }
}