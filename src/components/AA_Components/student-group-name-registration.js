import React,{useState} from "react";
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

export default function GroupRegistration(){

    const [group_name, setgroupname] = useState("");
    // const [student_id, setstudent_id] = useState("");
    // const [name, setname] = useState("");
    // const [email, setemail] = useState("");
    // const [phone, setphone] = useState("");

    const sendData = async (e) => {
        e.preventDefault();
        
        let new_group = {
            group_name: group_name,
            // student_id: student_id,
            // name: name,
            // email: email,
            // phone: phone
        }

        axios.post("http://localhost:8070/student/groupReg",new_group)
        .then(()=>{

            alert("Registration Success")
            window.location = "/studentdashboard"

        }).catch((err)=>{
            alert(err)
        })

        setgroupname("");
      
    }

    return(
                    <div>
                 <StudentNavBar/>
              <div align="center"><br/><br/><br/><br/>
           <div className="card-header" style={{width:"720px",background:"#E6E6FA"}}><br/><br/>
              <h2 align="center" style={{fontFamily:"times new roman"}}><b><u>Student Group Registration Form</u></b></h2>
               <form action="" method="post" name="form" onSubmit={sendData}> 
                  <div class="col-xl">
                   <div class="card-body p-md-5 text-black">
                <div class="form-outline mb-4">
               <div align="left">
            <label class="form-label" for="form3Example8">Group Name</label></div>   
          <input type="text"  id="form3Example8" class="form-control form-control-lg" 
             style={{fontSize:"1rem"}} onChange={(e) => setgroupname(e.target.value)}/>
               </div>
                 <div class="d-flex justify-content pt-3">
                   <button type="submit" class="btn btn-primary btn-2 ">Submit</button>
                    </div> 
                    <img src="https://acad.xlri.ac.in/results/preupld/images/login.svg"></img>                       
                   </div>
                </div>
             </form>  
          </div>
      </div><br/><br/> <br/><br/> <br/><br/><Footer/> </div>

    )

}
