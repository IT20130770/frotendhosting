import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import StudentHomePage from './components/SS_Components/StudentHomePage';
import StudentDashboard from './components/SS_Components/StudentDashboard';
import Groups from './components/SS_Components/Groups';
import BackendHomePage from './components/Layout/BackendHomePage'
import StaffLogin from './components/SS_Components/staff-login';
import StaffSignup from './components/SS_Components/staff-registration';
import Staff_Dashboard from './components/SS_Components/Staff_Dashboard';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import ResearchTopic from './components/SS_Components/ResearchTopic';
import Add_Feedback from './components/SS_Components/Add_Feedback'
import SupervisorAcceptTopic from './components/SS_Components/SupervisorAcceptTopic';
import CoSupervisorAcceptTopic from './components/SS_Components/CoSupervisorAcceptTopic';
import StaffProfile from './components/SS_Components/StaffProfile';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import PanelMembers from './components/SS_Components/PanelMembers';
import PDFUpload from './components/SS_Components/PDFUpload';
import AdminViewStaff from './components/SS_Components/AdminViewStaff';


import AdminLogin from './components/RD_Components/adminlogin';
import Adminregistration from './components/RD_Components/adminregistration';
import Admindashboard from './components/RD_Components/admindashboard';
import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
import AdminProfile from './components/RD_Components/adminProfile';
import CoSupervisorremove from './components/RD_Components/cosupervisorremove';
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import Supervisorremove from './components/RD_Components/supervisorremove';
import Usersremove from './components/RD_Components/usersremove';
import Studentsremove from './components/RD_Components/studentsremove';
import presantationpdfupload from './components/RD_Components/presantationpdfupload';
import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
import Markingschemesdetails from './components/RD_Components/markingschemesdetails';
import Evaluate from './components/RD_Components/evaluate';
import Evaluateedit from './components/RD_Components/evaluateedit';
import uploadmarkingschemes from './components/RD_Components/uploadmarkingschemes';
import Chatdialog from './components/chat/Chatdialog';


import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import Profile from './components/AA_Components/student-profile';
import GroupRegistration from './components/AA_Components/student-group-name-registration';
import Groupss from './components/AA_Components/student.groups';
import Add_Group_Members from './components/AA_Components/group-members-reg';
import PDFDisplay from './components/AA_Components/PDFDisplay';

import Display_researchtopics from './components/IS_Components/Display_researchtopics';
import AddResearchTopic from './components/IS_Components/Add_research_topic';
import Display_supervisors from './components/IS_Components/Display_supervisors';
import AddSupervisors from './components/IS_Components/Add_supervisor';
import Display_co_supervisors from './components/IS_Components/Display_co_supervisors';
import AddCoSupervisors from './components/IS_Components/Add_co_supervisor';
import DocUpload from './components/IS_Components/DocUpload';

export default class App extends Component {
    render() {
      return (
        <Router>
          <Switch>

    {/* Sajani */}
          <Route path = "/" component={StudentHomePage} exact/>
          <Route path = "/studentdashboard" component={StudentDashboard}/>
          <Route path = "/groups" component={Groups}/>
          <Route path = "/staff" component={BackendHomePage}/>
          <Route path = "/stafflogin" component={StaffLogin}/>
          <Route path = "/staffsignup" component={StaffSignup}/>
          <Route path = "/staffdashboard" component={Staff_Dashboard}/>
          <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
          <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
          <Route path = "/addfeedback/:id" component={Add_Feedback}/>
          <Route path = "/requestsupervisor" component={SupervisorAcceptTopic}/>
          <Route path = "/requestcosupervisor" component={CoSupervisorAcceptTopic}/>
          <Route path = "/staffprofile" component={StaffProfile}/>
          <Route path = "/studentgroups/:id" component={Add_panel_member}/>
          <Route path = "/panelmember" component={PanelMembers}/>
          <Route path = "/pdfupload" component={PDFUpload}/>
          <Route path = "/displayStaffRole" component={AdminViewStaff}/>

    {/* Randy */}
          <Route path = "/adminsignin" component={AdminLogin}/> 
          <Route path = "/adminsignup" component={Adminregistration}/>  
          <Route path = "/admindashboard" component={Admindashboard}/>  
          <Route path = "/adminprofile" component={AdminProfile}/>  
          <Route path = "/homemarkingschemes" component={Homemarkingschemes}/> 
          <Route path = "/getcosupervisor" component={CoSupervisorremove}/>
          <Route path = "/createmarkingadd" component={Createmarkingschemes}/>
          <Route path = "/getsupervisor" component={Supervisorremove}/>
          <Route path = "/getpanelmember" component={Usersremove}/>
          <Route path = "/getstudent" component={Studentsremove}/>
          <Route path = "/presantation" component={presantationpdfupload}/>
          <Route path = "/createmarkingedit/:createmarkingID" component={Editmarkingschemes}/>
          <Route path = "/createmarking/:createmarkingID" component={Markingschemesdetails}/>
          <Route path = "/evaluateedit/:createmarkingID" component={Evaluateedit}/>
          <Route path = "/evaluate" component={Evaluate}/>
          <Route path = "/uploadevaluate" component={uploadmarkingschemes}/>
          <Route path = "/chatdialog" component={Chatdialog}/>

    {/* Aroshini */}
          <Route path = "/signin" component={StudentLogin}/>
          <Route path = "/signup" component={Signup}/>
          <Route path = "/profile" component={Profile}/>
          <Route path= "/groupReg" component={GroupRegistration}/>
          <Route path= "/groupss" component={Groupss}/>
          <Route path= "/display/:id" component={Add_Group_Members}/>
          <Route path = "/pdfdisplay" component={PDFDisplay}/> 
       

    {/* Imaya */}
          <Route path = "/regtopic/displayresearchtopic" component={Display_researchtopics}/> 
          <Route path = "/regtopic/research/:id" component={AddResearchTopic}/>
          <Route path = "/regtopic/displaysupervisors" component={Display_supervisors}/>
          <Route path = "/regtopic/addSupervisor/:id/:feild" component={AddSupervisors}/> 
          <Route path = "/regtopic/displaycosupervisors" component={Display_co_supervisors}/> 
          <Route path = "/regtopic/addcoSupervisor/:id/:feild" component={AddCoSupervisors}/> 
          <Route path = "/document/submitdoc" component={DocUpload}/> 


          </Switch>
        </Router>
      )
    }
}
