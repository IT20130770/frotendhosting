import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';

export default class Homemarkingschemes extends Component {
    constructor(props){
    super(props);
   
 
    this.state={
      createmarking:[]
    };
    this.pdfGenerat = this.pdfGenerat.bind(this);
 }

componentDidMount(){
    this.retrievecreatemarking();
}

//data retrive
 retrievecreatemarking(){
        axios.get("http://localhost:8070/createmarking/displaycreatemarking").then(res=>{
            if(res.data.success){
               this.setState({
                createmarking:res.data.existingCreatemarking
               });

               console.log(this.state.createmarking)
            }  
    });
}

//delete data
onDelete = (createmarkingID) => {
  if (window.confirm('Are you sure you wish to delete this details?')) {
    axios.delete(`http://localhost:8070/createmarking/delete/${createmarkingID}`).then((res) => {
     alert('Details Deleted Successfully');
      this.retrievecreatemarking();

    })
  }
}
filterData(createmarking,searchKey) {

  const result = createmarking.filter((createmarkin) =>
    createmarkin.criteria.toLowerCase().includes(searchKey) ||
    createmarkin.good.toLowerCase().includes(searchKey) ||
    createmarkin.poor.toLowerCase().includes(searchKey) ||
    createmarkin.avarage.toLowerCase().includes(searchKey) ||
    createmarkin.comment.toLowerCase().includes(searchKey) ||
    createmarkin.marks.toLowerCase().includes(searchKey)
  )
  this.setState({createmarking: result})
}

handleSearchArea = (e) => {

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8070/createmarking/displaycreatemarking").then(res => {
    if (res.data.success) {

      this.filterData(res.data.existingCreatemarking, searchKey)

    }

  });
}

//pdf generator

 pdfGenerat(e){
  var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  
  doc.autoTable({
         
          body: [
              [{ content:'Marking Schemes'  , colSpan: 2, rowSpan: 2, styles: { halign: 'center'  } }],
            ],
          })
      autoTable(doc, { html: '#cusdet' })
     doc.save('TopicRegister.pdf')

        }

render() {
  
    return (
      <div><AdminNavBar/> 
      <div className="pt-3" align="center" background color="red" >
        <div className=" shadow mb-8 w-100" id="cardcol">
          <div className="card-header py-3" >
            <h1 align="center"><b>&nbsp;&nbsp;&nbsp;Marking Schemes</b></h1><br />

            <div className="card-body" >
              <div className="col-md-8 mt-4 mx-auto"></div>

              <div className="col-lg-3 mt-2 mb-2">
                <input className="form-control" type="search"
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea}>
                </input>


              </div>
              <div>
              <Button className="form-group" type="submit" style={{ background: "#E77471", width: 13 + "%", align: "right" }} startIcon={<InsertDriveFileIcon />} onClick={this.pdfGenerat}>
                 Download</Button>
              </div>
              <div align="right">

                <form onSubmit={this.handleSearchArea}>
                
</form>
        <table className="table table-hover" id="cusdet"   style={{ marginTop: '40px', background: "#FFFFFF" }} > 
        <thead>
            <tr>
               {/* <th scope ="col"> No </th> */}
               <th scope ="col"> Criteria </th>
               <th scope ="col"> Good (10-8) </th>
               <th scope ="col"> Avarage (4-7) </th>
               <th scope ="col"> Poor (0-3) </th>
               <th scope ="col"> Comment </th>
               <th scope ="col"> Marks </th>
            </tr>
        </thead>
        <tbody>
          {this.state.createmarking.map((createmarking) => (
             <tr>
          <td>
            
            <a href={`/createmarking/${createmarking._id}`} style={{textDecoration:'none'}}>
            {createmarking.criteria}
            </a>
            </td>
           
          <td>{createmarking.good}</td>
          <td>{createmarking.avarage}</td>
          <td>{createmarking.poor}</td>
          <td></td>
          <td></td>
          <td> 
              <Button className="form-group" type="submit" style={{ background: "#C3FDB8", width: 10 + "%", align: "center" }} startIcon={<EditSharpIcon />} href={`/createmarkingedit/${createmarking._id}`}>
                        </Button>

                        &nbsp;
                        <Button className="form-group" type="submit" style={{ background: "#F75D59", width: 10 + "%", align: "center" }} startIcon={<DeleteForeverSharpIcon />} onClick={() => this.onDelete(createmarking._id)}>
                        </Button>
              </td>
                 </tr>

          ))}
        </tbody>
        </table>
        <div className="form-group">
               
                  <Button  href="/createmarkingadd" variant="contained" className="w-10" align="left" style={{ background: "#CCCCFF", width: +"%" }} startIcon={< AddCircleOutlinedIcon />}  >
                  Create New Point</Button>
              
              </div>   
      </div>
      </div>
      </div>
      </div>
      </div>
      <br/><br/><br/><br/>
      <Footer/>
      </div>
    )
    
  }
}
