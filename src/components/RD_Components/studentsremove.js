import React, { Component } from 'react';
import axios from 'axios';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';


export default class Studentsremove extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentsremove:[]
        };
    }  
 
    //retrive supervisor members 
componentDidMount(){
    this.retrievestudentsDetails();
}   


//data retrive
retrievestudentsDetails(){
    axios.get("http://localhost:8070/usersremove/getstudent").then(res=>{
        if(res.data.success){
           this.setState({
            studentsremove:res.data.existingstudent
           });

           console.log(this.state.studentsremove)
        }
    
});
}

//delete cosupervisor
onDelete = (studentID) => {


  if (window.confirm('Are you sure you wish to delete this details?')) {
    axios.delete(`http://localhost:8070/usersremove/studentdelete/${studentID}`).then((res) => {
      alert('Details Deleted Successfully');

      //alert("Delete Successfully")
      this.retrievestudentsDetails();

    })
  }
}

filterData(studentsremove, searchKey) {
  const result = studentsremove.filter((stud) =>
    stud.name.toLowerCase().includes(searchKey) ||
    stud.student_id.toLowerCase().includes(searchKey) 
    
  )
  this.setState({studentsremove: result })
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;
  axios.get("http://localhost:8070/usersremove/getstudent").then(res => {
    if (res.data.success) {
      this.filterData(res.data.existingstudent,searchKey)
    }
  });
}


 render() {
    return ( 
                        <div>
                          <AdminNavBar/>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Students Details </u></b></h3><br/>
              <div className="col-md-3" >
            <div className="col-lg-9 mt-2 mb-2">
                <input className="form-control" type="search" style={{marginLeft:"75px"}}
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea} >
                </input></div>

               </div><br/>
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Student Name</th>
                   <th scope='col'>Student NIC</th>
                   <th scope='col'>Student ID</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Batch</th>
                           <th scope='col'>Specialization</th>
                         <th scope='col'>Phone Number</th>
                     <th scope='col'>Date Of Birth</th>
                     <th scope='col'>Email</th>
                     <th scope='col'>Action</th>
                 </tr>
             </thead>
               <tbody>
                   {this.state.studentsremove.map((studentsremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{studentsremove.name}</td>
                                  <td>{studentsremove.nic}</td>
                                    <td>{studentsremove.student_id}</td>
                                       <td>{studentsremove.faculty}</td>
                                 <td>{studentsremove.batch}</td>
                            <td>{studentsremove.specialization}</td>
                        <td>{studentsremove.phone}</td>
                        <td>{studentsremove.DOB}</td>
                   <td>{studentsremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(studentsremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
                  )
                    )}
                      </tbody>     
                         </table>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Footer/>
                              </div>
    )
  }
}
