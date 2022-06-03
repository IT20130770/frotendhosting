import React, { Component } from 'react';
import axios from 'axios';

export default class PanelMembers extends Component {
    constructor(props){
        super(props);
        this.state = {
            staff:[]
        };
    }  
//retrive all panel members 
componentDidMount(){
    this.retrieveStaffRole();
} 

retrieveStaffRole(){
    axios.get("http://localhost:8070/admin/panelmember").then(res=>{
        if(res.data.status){
            this.setState({
                staff:res.data.panelmember
     });
    }
  })
 }

render() {
    return ( 
                        <div>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Panel Member Details </u></b></h3><br/>
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
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