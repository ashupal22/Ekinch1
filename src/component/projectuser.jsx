import React, { useState, useEffect } from 'react';
import axios from 'axios';
import project_user from './project-user';
import { useParams } from 'react-router-dom';


const ProjectUsers = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);
  const { projectId } = useParams();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (searchInput.trim() !== '') {
          const response = await axios.get(`http://localhost:5000/api/users?search=${searchInput}`);
          setUsers(response.data);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

  fetchUsers();
  }, [searchInput]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const addUserToProject = async (userId) => {
    try {
      console.log(projectId)
      const response = await axios.post(`http://localhost:5000/add-user-to-project/${projectId}`, {
        userId: userId,
      });

      // Check if the user was successfully added to the project
      if (response.status === 200) {
        alert('User added to the project successfully');
        // You can also update the 'users' state here to reflect the changes in the frontend UI
      }
    } catch (error) {
      console.error('Error adding user to project:', error);
      alert('Error adding user to the project');
    }
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18" >Add User In This Project</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Agencies</a>
                    </li>
                    <li className="breadcrumb-item active">Add User</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="row">
                  <div className="col-lg-9"></div>
                  <div className="col-lg-3">
                    <form className="row m-r-0-mem">
                      <div className="col-sm-auto p-0-l-r">
                        <div className="input-group view-all_invoc_panel position-relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search UserName,MobileNo. or ID"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                          />
                          <span className="bx bx-search-alt"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "100px" }}>S.No.</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Post</th>
                        <th scope="col">Ongoing Projects</th>
                      </tr>
                    </thead>
                    <tbody>            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <h5 className="text-truncate font-size-14 m-b-0-mem">{user.name}</h5>
                </td>
                <td><a href="#">{user.Mobile}</a></td>
                <td>{user._id}</td>
                <td>{user.post}</td>
                <td><div style={{ float: 'left' }}>
                                <button
                                  type="button"
                                  className="yet_benn btn btn-primary btn-sm waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal"
                                   >
                                 Add User
                                </button>                                                                
                              </div> 
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="mdi mdi-dots-vertical font-size-18"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">View</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

                      {/* <tr>
                        <td>1</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">Sanjay</h5>
                        </td>
                        <td><a href="#">24123124</a></td>
                        <td>1023423gsdgassdfsdfg</td>
                        <td>ENG</td>
                        <td><div style={{ float: 'left' }}>
                                <button
                                  type="button"
                                  className="yet_benn btn btn-primary btn-sm waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal">
                                 Add User
                                </button>                                                                
                              </div>                         
                          <div className="dropdown">
                            <a href="#" className="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">View</a>
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                  <div className="main_pagination p-t-0-pro">
                    <div className="pagination">                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
          <div>
          {project_user()}
            </div>   
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 text-center">
                  © 2023 Copyright, All rights reserved. | Ekinch.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      </div>
  );
};

export default ProjectUsers;
