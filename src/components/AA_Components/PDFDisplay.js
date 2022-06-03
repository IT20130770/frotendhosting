import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';
import Button from '@material-ui/core/Button';

const PDFDisplay = () => {
  const [presantationpdfupload, setpresantationpdfupload] = useState([{
    setpresantationpdfupload:"",
    setdocName:""
    }]);

    useEffect(() => {
      function getpdf(){
        axios.get("http://localhost:8070/presantationpdf/presantationpdfdisplay")   
          .then((res) => {
            setpresantationpdfupload(res.data)
          }).catch((error) => {
            console.log(error.message)
       })              
  }
      getpdf()
  },[])
    
  return (
    <div>
    <StudentNavBar/> <br/><br/><br/>   
         <center><h1><b>
            <u>Download Template</u></b></h1><br/><br/>   
               {presantationpdfupload.map(( doc) => (  
             <div style={{marginTop:"10px"}}>
          <Button variant="contained" className="w-6" 
        style={{background: "#151B54", width: 30+"%",color:"white"}}  
     href={doc.presantationpdfupload} download>
         {doc.docName} 
             </Button>
                </div> 
      ) )}          </center>
                      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
  </div>
  )
}
export default PDFDisplay;