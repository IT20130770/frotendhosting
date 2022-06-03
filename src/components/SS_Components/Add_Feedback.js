import React, { Component } from 'react';
import axios from "axios";
import AdminNavBar from '../Layout/AdminNavBar';
import Button from '@material-ui/core/Button';
import Footer from '../Layout/footer';

export default class Add_Feedback extends Component {
    constructor(props){   
        super(props);
        this.state={
            feedback:""
        }
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
        const{feedback} = this.state;
        const data = {
            feedback:feedback
        }

axios.post(`http://localhost:8070/group/addfeedback/${id}`,data).then((res)=>{  
            if(res.data.success){
                this.setState({
                    feedback:""
               })
               alert("FeedBack added Successfull..!!");
               window.location.href="/topic/displayresearchtopic"
          }    
        }) .catch((e)=>{
        });
    }

render() {
  return (
      <div>
        <AdminNavBar/> 
          <br/>
            <div align="center">
              <div className="card-header" style={{width:"500px",background:"#E6E6FA"}}><br/><br/>
           <h3 align="center" style={{fontFamily:"serif"}}><b>ADD FEEDBACK TO  RESEARCH </b></h3>
       <h3 align="center" style={{fontFamily:"serif"}}><b>TOPIC</b></h3>
    <form className='needs-validation'>
<div className="col-lg-10 mt-2">    
     <div align="left"><br/>
         <label id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Enter Your FeedBack</label>
              <input
                  type="text" 
                      className='form-control'
                    name='feedback'
                placeholder='Enter FeedBack'
             value={this.state.feedback}
        onChange={this.handleInputChange}>
    </input>
        </div><br/>
            <Button variant="contained" className="w-6" style={{background: "#151B54", width: 40+"%",color:"white"}}
                disableElevation type="submit"  onClick={this.onSubmit}>Add FeedBack</Button>
                 </div>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-working-from-home-3406151-2840747.png" class="img-fluid" alt="Phone image" />
                 </form>    
             </div>
        </div><br/>
    <Footer/>
      </div>
    )
  }
}
