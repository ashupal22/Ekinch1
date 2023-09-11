import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import BodyComponent from "./component/body";
import Index from "./component/index";
import Add_project from "./component/add-project";
import Add_user from "./component/add-user";
import All_project from "./component/all-projects";
import Agencies from "./component/agency";
import Tenders from "./component/tender";
import Chats from "./component/chats";
import Notifications from "./component/notificaton";
import Profile from "./component/profile";
import LoginForm from "./component/login";
import ProjectUser from "./component/projectuser";
import Edit_Project from "./component/edit-project";
import ProjectDetails from "./component/project-detail";


function App() {
    return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<LoginForm />} />

        <Route
          path="/*"
          element={
            <>
              <BodyComponent />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/add-project" element={<Add_project />} />
                <Route path="/add-user" element={<Add_user />} />
                <Route path="/all-project" element={<All_project />} />
                <Route path="/all-project/:projectId" element={<ProjectUser />} />
                <Route path="/all-project/edit/:projectId" element={<Edit_Project />} />
                <Route path="/all-project/details/:projectId" element={<ProjectDetails />} />


                <Route path="/agencies" element={<Agencies />} />
                <Route path="/tenders" element={<Tenders />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />

                {/* <Route path="/logout" element={<Profile />} /> */}
                
                <Route path="*" element={<div>Not found</div>} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
  
    