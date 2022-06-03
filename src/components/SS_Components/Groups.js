import React, { Component } from 'react';
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Button from '@material-ui/core/Button';

export default class Groups extends Component {
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
         }
     })
 }

  render() {
    return (
      <div>
      <StudentNavBar/><br/><br/> <br/>
          <h3 align="center" style={{fontSize:'40px',fontFamily:"Times New Roman"}}><b><u>Research Topic Feedback</u></b></h3><br/><br/>
             <div className='container'>  
                 <table class="table" >
                    <thead>
                    <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
              <th scope='col'>Group Name</th>
          <th scope='col'>Research Feild</th>
       <th scope='col'>Research Topic</th>
         <th scope='col'> Status</th>
            <th scope='col'>FeedBack</th>
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
                 </tr>
                    ))}
                      </tbody>
                         </table>
                            </div>     
    
  </div>
    )
  }
}
