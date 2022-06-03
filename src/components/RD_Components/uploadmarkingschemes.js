import React,{useState} from "react";
import axios from "axios";
import StaffNavbar from "../Staff-Layout/StaffNavbar";
import Footer from '../Layout/footer';
import { getDownloadURL,getStorage, ref,uploadBytesResumable, } from "firebase/storage";import app from "../../FireBase";

export default function uploadmarkingschemes(){
    const [markingupload, setmarkingupload] = useState("");
    const [uploadName, setuploadName] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        const fileName = new Date().getTime().toString() + markingupload.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, markingupload);

  // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {

     // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((markingupload) => {
            console.log('File available at', markingupload);
           
            let new_markingupload = {
                markingupload:markingupload,
                uploadName:uploadName
            }
            axios.post("http://localhost:8070/marking/marking",new_markingupload)
            .then(()=>{
                alert("Upload Success")
                window.location = "/staffdashboard"
            }).catch((err)=>{
                alert(err)
            })
        });
    }
    );
}
 
    return (
        <div>
        <StaffNavbar/> 
           <br/><br/> 
             <div align="center">
                <div className="card-header" style={{width:"550px",background:"#E6E6FA"}}><br/><br/>
             <h3 align="center">
         <b><u>MARKING SCHEMES UPLOAD </u></b></h3><br/>
     <form action="" method="post" name="form" onSubmit={sendData}> 
 <div className="col-lg-10 mt-2">    
      <div align="left">
           <label id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>File Upload</label>
               <input type="file"  class="form-control" onChange={(e) => setmarkingupload(e.target.files[0])} required/>  
                </div>   
         <div align="left"><br/>
    <label class="form-text" style={{marginBottom:'2px'}}>File Name</label>
<input type="text"  class="form-control" onChange={(e) => setuploadName(e.target.value)} placeholder="Please Enter the File Name" required/>  
    </div><br/> 
         <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;Submit</button>
             </div> 
         <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-working-from-home-3406151-2840747.png" class="img-fluid" alt="Phone image" />
          </form>
             </div>
                </div>
                  <br/><br/>
                     <Footer/>
                        </div>
    
    )

}
