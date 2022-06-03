import React, { Component } from 'react';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';


export default class mainhome extends Component {
  render() {
    return (
      <div>
        <StudentNavBar/>
        <div className="container" ><br/><br/>
                <div class="row row-cols-1 row-cols-md-3 g-4" >
                    <div class="col" style={{width: "25rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#F3E5AB"}} >
                        <h5 class="card-title" id="dashh5" align="center" ><b> Faculty of Computing</b></h5>
                        </div>
                        <img
                            src="https://www.sliit.lk/wp-content/uploads/2017/12/Business-Analytics.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                    </div>
                 
                    <div class="col" style={{width: "27rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#F3E5AB"}} >
                        <h5 class="card-title" id="dashh5"  align="center"><b>Faculty of Business</b></h5>
                        </div>
                        <img
                            src="https://static.sliit.lk/wp-content/uploads/2017/12/Marketing-Management.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                    </div>     
                    
                    <div class="col" style={{width: "30rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#F3E5AB"}}>
                        <h5 class="card-title" id="dashh5"  align="center"><b> Faculty of Engineering</b></h5>
                        </div>
                        <img
                            src="http://www.sundaytimes.lk/201011/uploads/State-of-the-Art-Laboratories.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                    </div>

                    <div class="col" style={{width: "25rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#F3E5AB"}}>
                        <h5 class="card-title" id="dashh5"  align="center"><b>Faculty of Humanities & Sciences</b></h5>
                        </div>
                        <img
                            src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.edu.dailymirror.lk/uploads/articles_14_2fe4654f38.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                    </div>


                    <div class="col" style={{width: "27rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body"  style={{background: "#F3E5AB"}} >
                        <h5 class="card-title" id="dashh5"  align="center"><b>School of Architechture</b></h5>
                        </div>
                        <img
                            src="https://ancedu.com/wp-content/uploads/2021/05/Foundation.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                    </div>


                    <div class="col" style={{width: "30rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body"  style={{background: "#F3E5AB"}} >
                        <h5 class="card-title" id="dashh5" align="center"><b>SLIIT International</b></h5>
                        </div>
                        <img
                            src="https://media.istockphoto.com/photos/in-the-library-pretty-female-student-with-books-picture-id528954725?k=20&m=528954725&s=612x612&w=0&h=Z9zdmw5E_KBrw5r-Wxy4r3PossWEyQp9x26f6R5w0Us="
                            class="card-img-top"
                            height="280px"
                            alt="..."/>
                        </div>
                       </div>
                     </div>
                  </div><br/><br/>
        <Footer/>
        </div>
    )
  }
}
