import React, { Component } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import StaffNavbar from "../Staff-Layout/StaffNavbar";

export default class Evaluateedit extends Component {

  constructor(props){
    super(props);
    this.state={
      criteria:"",
      good:"",
      avarage:"",
      poor:"",
      comment:"",
      marks:""

    }
}

handleInputChange = (e) =>{
  const{name,value} = e.target;

  this.setState({
     ...this.state,
     [name]:value

  })
}

onSubmit = (e) =>{


  e.preventDefault();
  const createmarkingID = this.props.match.params.createmarkingID;

  const {criteria,good,avarage,poor,comment,marks} = this.state;
  const data ={
         criteria:criteria,
         good:good,
         avarage:avarage,
         poor:poor,
         comment:comment,
         marks:marks
 
  }

  console.log(data)

  axios.put(`http://localhost:8070/createmarking/update/${createmarkingID}`,data).then((res) =>{
  if(res.data.success){
    if (window.confirm('Are you sure you wish to update this details?')) {
   alert('Marking Scheme Updated Successfully');  
      window.location.href = '/evaluate';


    this.setState(
   
      {
        criteria:"",
        good:"",
        avarage:"",
        poor:"",
        comment:"",
        marks:""
          }
         )
       }
     }
   }
  )
}

componentDidMount(){
  const createmarkingID = this.props.match.params.createmarkingID;

  axios.get(`http://localhost:8070/createmarking/${createmarkingID }`).then((res)=>{
  if (res.data.success){
  this.setState({
    criteria:res.data.createmarking.criteria,
    good:res.data.createmarking.good,
    avarage: res.data.createmarking.avarage,
    poor: res.data.createmarking.poor,
    comment:res.data.createmarking.comment,
    marks:res.data.createmarking.marks
  });
  console.log(this.state.createmarking);
}
});

}

  render() {
    return (
      <div>
         <StaffNavbar/>
      <div className="pt-3" align="center" >
       <div className="card shadow mb-8 w-50">
         <div className="card-header py-3">
        <h1 className="m-0 font-weight-bold text-dark" id="randy">Update Marking Schemes</h1><br/>
        </div>
         <div className="card-body">
         <div className = "col-md-8 mt-4 mx-auto">
        <form className="needs-validation" noValidate>

        <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Criteria</label>
              <input type="text" className="form-control" name="criteria" placeholder="Enter Details" value={this.state.criteria}
              onChange={this.handleInputChange}readOnly/>
           </div>

           <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Good (10-8)</label>
              <input type="text" className="form-control" name="good" placeholder="Enter Details" value={this.state.good}
              onChange={this.handleInputChange}readOnly/>
           </div>



           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Avarage(4-7)</label>
              <input type="text" className="form-control" name="avarage" placeholder="Enter Details" value={this.state.avarage}
             onChange={this.handleInputChange}readOnly/>
           </div>

           
           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Poor(0-3)</label>
              <input type="text" className="form-control" name="poor" placeholder="Enter Details" value={this.state.poor}
             onChange={this.handleInputChange}readOnly/>
           </div>

          
           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Comment</label>
              <input type="text" className="form-control" name="comment"  value={this.state.comment}
             onChange={this.handleInputChange}/>
           </div>

           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Marks</label>
              <input type="text" className="form-control" name="marks"  value={this.state.marks}
             onChange={this.handleInputChange}/>
           </div>
<div>
      <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.onSubmit}> 
      Update Details</Button>   
  </div>

         
        </form>          
        </div>
     </div>
     </div>
     </div>
     </div>
     

    )

}

}