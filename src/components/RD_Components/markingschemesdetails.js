import React, { Component } from 'react'
import axios from 'axios';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import Button from '@material-ui/core/Button';
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';

export default class Markingschemesdetails extends Component {
     constructor(props){
         super(props);

         this.state={
           createmarking:{}
         };
     }

componentDidMount(){

    const createmarkingID = this.props.match.params.createmarkingID;

    axios.get(`http://localhost:8070/createmarking/${createmarkingID}`).then((res)=>{
      if (res.data.success){
        this.setState({
          createmarking:res.data.createmarking

        });
        console.log(this.state.createmarking);
    }  
    });

}

render() {

  const {criteria,good,avarage,poor,comment,marks} = this.state.createmarking;

  return (
   
<div><AdminNavBar/>
<br/><br/><br/>
      <div align="center" style= {{marginTop:'20px'}}>
      <dl className="row">
  <div className="pt-3" align="center" background color="red">
    <div className="card shadow mb-8 w-50">
      <div className="card-header py-3">
      
           <dt className="col-sm-3">Criterias</dt>
            <dd className="col-sm-9">{criteria}</dd>
       
           <dt className="col-sm-3">Good</dt>
            <dd className="col-sm-9">{good}</dd>

            <dt className="col-sm-3">Avarage</dt>
            <dd className="col-sm-9">{avarage}</dd>

            <dt className="col-sm-3">Poor</dt>
           <dd className="col-sm-9">{poor}</dd>

           <dt className="col-sm-3">Comment</dt>
           <dd className="col-sm-9">{comment}</dd>

           <dt className="col-sm-3">Marks</dt>
            <dd className="col-sm-9">{marks}</dd>

           
            </div>  
         </div> 
         </div> 
         <div>
         <br/>

      <Button className="form-group" href="/homemarkingschemes" type="submit"style={{background: "#C48189", width: 10+"%"}} startIcon={<FastForwardRoundedIcon/>}  onClick={this.onSubmit}> 
      Continoue</Button>
  
  </div>
</dl>

   </div>
   <br/><br/><br/><br/><br/><br/>
   <Footer/>
   </div>
      
  )

}
}

