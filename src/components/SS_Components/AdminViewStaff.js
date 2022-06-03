import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from '../Layout/AdminNavBar';


export default class AdminViewStaff extends Component {
    constructor(props){
        super(props);
        this.state = {
            staff:[]
        };
    }  

//retrive all staff members 
  componentDidMount(){
      this.retrieveStaffRole();
  }  

  retrieveStaffRole(){
      axios.get("http://localhost:8070/admin/displayStaffRole").then(res=>{
          if(res.data.success){
              this.setState({
                  staff:res.data.existingDisplayStaffRole
      });
    }
  })
}  

//serch  staff members using staff id, faculty, field and role
filterData(staff,searchKey){
  const result = staff.filter((staff)=>
  staff.staff_id.toLowerCase().includes(searchKey)||
  staff.faculty.toLowerCase().includes(searchKey)||
  staff.feild.toLowerCase().includes(searchKey) || 
  staff.role.toLowerCase().includes(searchKey) 
  )
  this.setState({staff:result})
}
handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/admin/displayStaffRole").then(res=>{
      if(res.data.success){
      this.filterData(res.data.existingDisplayStaffRole,searchKey)
    }
  });
}

    render() {
    return (   
    <div >
       <AdminNavBar/> <br/><br/>
         <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}><b><u>All Staff Member Details </u></b></h3><br/>
           <div className='container'>
              <div className="col-md-3" >
                 <input type="text" className="form-control" style={{marginBottom:'2px'}} placeholder="Search Staff Member" onChange={this.handleSearchArea}/>
                    <br/> 
                      </div>      
                        <div align="right">       
                        <label style={{fontSize:'18px', color:'black', fontWeight:700}}>Staff Member Role : &nbsp;&nbsp;</label>
                     <select className="dropDown" onChange={this.handleSearchArea}>
                   <option value="" >..</option>
                <option value="supervisor" >Supervisor</option>
             <option value="co-supervisor" >Co-Supervisor</option>
          <option value="panel member" >Panel Member</option>
    </select> </div><br></br>                        
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
                     <th scope='col'>Phone Number</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Feild</th>
                           <th scope='col'>Staff ID</th>
                         <th scope='col'>Role</th>
                     <th scope='col'>Email</th>
                 </tr>
        </thead>
            <tbody>
               {this.state.staff.map((staff,index)=>(
                  <tr key={index}>    
                      <th scope='row'>{index + 1}</th>
                          <td>{staff.name}</td>
                             <td>{staff.phone}</td>
                                <td>{staff.faculty}</td>
                                 <td>{staff.feild}</td>
                               <td>{staff.staff_id}</td>
                           <td>{staff.role}</td>
                        <td>{staff.email}</td>              
                    </tr>
                  )
               )}
           </tbody>     
        </table>
     </div>
 </div>
      )
    }
  }