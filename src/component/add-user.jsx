import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Add_user = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">All Projects</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Projects</a>
                    </li>
                    <li className="breadcrumb-item active">All Projects</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="payment-list-detil">
                  <div className="row">
                    <div className="col-lg-4">
                      <h4 className="card-title mb-4 project_summry">
                        View All Projects
                      </h4>
                    </div>
                    <div className="col-lg-8 mb-2 pl-l60">
                      <form className="row">
                        <div className="col-sm-auto p-0-l-r mr-22">                        
                        </div>
                        <div className="col-sm-auto p-0-l-r">
                          <div className="input-group view-all_invoc_panel position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search by name or id"
                            />
                            <span className="bx bx-search-alt"></span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                          
                          <th className="align-middle">S.No</th>
                          <th className="align-middle">Project ID</th>
                          <th className="align-middle">Project Name</th>
                          <th className="align-middle">Place of Project</th>
                          <th className="align-middle">Project Cost</th>
                          <th className="align-middle">Start Date</th>
                          <th className="align-middle">End Date</th>
                          <th className="align-middle">Agency (PWD)</th>
                          <th className="align-middle">Add Users</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="javascript: void(0);"
                              className="text-body fw-bold"
                            >
                              1
                            </a>{' '}
                          </td>
                          <td>GHSF123K</td>
                          <td>Building Construction</td>
                          <td>
                            <i className="mdi mdi-map-marker-radius-outline me-1 font-16"></i>{' '}
                            Kanpur
                          </td>
                          <td>INR 1cr-2cr</td>
                          <td>12-12-2023</td>
                          <td>12-12-2024</td>
                          <td>EKinch</td>
                          <td>
                            <div><div style={{ float: 'left' }}>
                                <button
                                  type="button"
                                  className="yet_benn btn btn-primary btn-sm waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal"
                                >
                                  Add User
                                </button>
                              </div>                              
                              <div className="dropdown ms-auto dot_menu">
                                <a
                                  className="text-muted font-size-16"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-vertical"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <div className="controls mb-0">
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target=".transaction-detailModal"
                                    >
                                      <i className="bx bxs-edit-alt mr-1"></i>
                                      Edit Project
                                    </a>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              
              <td>{project.project_id}</td>
              <td>{project.project_name}</td>
              <td><i className="mdi mdi-map-marker-radius-outline me-1 font-16"></i>{' '}{project.project_city}</td>
              <td>{project.project_cost}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.project_agency}</td>
              <td>
                            <div>
                              <div style={{ float: 'left' }}>
                              <Link to ={`/all-project/${project._id}`}>
                                <button
                                  type="button"
                                  className="yet_benn btn btn-primary btn-sm waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal"
                                >
                                 Add User
                                </button>
                                </Link>
                                                                
                              </div>                           
                              
                                  
                              <div className="dropdown ms-auto dot_menu">
                                <a
                                  className="text-muted font-size-16"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-vertical"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <div className="controls mb-0">
                                    
                                    <Link to={`/all-project/edit/${project._id}`}
                                    className="dropdown-item">
                                      <i className="bx bxs-edit-alt mr-1"></i>
                                      Edit Project
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
            </tr>
          ))}
                      </tbody>
                    </table>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <footer className="footer">
              <div className="row">
                <div className="col-sm-12 text-center">
                  © 2023 Copyright, All rights reserved. | Ekinch.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_user; 