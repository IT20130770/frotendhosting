import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';


export default class CoSupervisorremove extends Component {
    constructor(props){
        super(props);
        this.state = {
            cosupervisorremove:[]
        };
    }  

    //retrive cosupervisor members 
componentDidMount(){
    this.retrievecosupervisorDetails();
} 
retrievecosupervisorDetails(){
    axios.get("http://localhost:8070/usersremove/getcosupervisor").then(res=>{
        if(res.data.status){
            this.setState({
                cosupervisorremove:res.data.cosupervisor
     });
    }
  })
 }

//delete cosupervisor
onDelete = (cosupervisorID) => {


    if (window.confirm('Are you sure you wish to delete this details?')) {
      axios.delete(`http://localhost:8070/usersremove/cosupervisordelete/${cosupervisorID}`).then((res) => {
       alert('Details Deleted Successfully');
  
        //alert("Delete Successfully")
        this.retrievecosupervisorDetails();
  
      })
    }
  }

  filterData(cosupervisorremove, searchKey) {

    const result = cosupervisorremove.filter((cosupervisorre) =>
      cosupervisorre.name.toLowerCase().includes(searchKey) ||
      cosupervisorre.faculty.toLowerCase().includes(searchKey) ||
      cosupervisorre.feild.toLowerCase().includes(searchKey) ||
      cosupervisorre.staff_id.toLowerCase().includes(searchKey) ||
      cosupervisorre.role.toLowerCase().includes(searchKey) ||
      cosupervisorre.email.toLowerCase().includes(searchKey)
    )
    this.setState({cosupervisorremove: result })
  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/usersremove/getcosupervisor").then(res => {
      if (res.data.success) {

        this.filterData(res.data.cosupervisor,searchKey)

      }

    });
  }

 render() {
    return ( 
                            <div>
                          <AdminNavBar/>
                       <br/><br/>
                    <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
                  <b><u>All Co-Supervisor Details </u></b></h3><br/>
                     <div className="col-lg-2 mt-2 mb-2">
                       <input className="form-control" type="search" style={{marginLeft:"75px"}}
                    placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea} >
                </input></div><br/>
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
                   {this.state.cosupervisorremove.map((cosupervisorremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{cosupervisorremove.name}</td>
                               <td>{cosupervisorremove.faculty}</td>
                                 <td>{cosupervisorremove.feild}</td>
                            <td>{cosupervisorremove.staff_id}</td>
                        <td>{cosupervisorremove.role}</td>
                   <td>{cosupervisorremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(cosupervisorremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
                  )
                    )}
                      </tbody>     
                         </table>
                            </div><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
                            <Footer/>
                              </div>
    )
  }
}