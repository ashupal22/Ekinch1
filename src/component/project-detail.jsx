import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Drawing from "./drawing";
import Project_chat from "./project_chat";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details from the server using the project ID
    axios
      .get(`http://localhost:5000/projects/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.error(error));
  }, [projectId]);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  
  return (
    <>
  {/* Hello world */}
  <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Project Details</h4>
              <div className="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            className="d-inline-block"
                          >
                            <img
                              src="assets/images/avatar-2.jpg"
                              alt=""
                              className="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Dashboards</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Projects</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">View Project</a>
                  </li>
                  <li className="breadcrumb-item active">Project Detail</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/*  Alternate direction */}
        {/* end row */}
        <div className="row">
          <div className="col-xl-12">
            <div className="card pro-m-b-0">
              <div className="card-body frm_space frm_pro_spc">
                <div className="row mt-0">
                  <div className="col-xl-12">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#home"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-home" />
                          </span>
                          <span className="d-none d-sm-block">
                            Project Info
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#profile"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user" />
                          </span>
                          <span className="d-none d-sm-block">
                            Project Drawing
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#messages"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-envelope" />
                          </span>
                          <span className="d-none d-sm-block">Chat</span>
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                  </div>
                </div>
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
          {/* end col */}
          {/* end col */}
        </div>
        <div className="tab-content text-muted pro_dr_bg">
          <div className="tab-pane active  mb-2" id="home" role="tabpanel">
            <p className="mb-0"></p>
            <div className="col-xl-12 col-sm-6">
              <div className="card br-rad">
                <div className="card-body ex-psce_pro">
                  <div className="d-flex">
                    <div className="flex-grow-1 overflow-hidden">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.project_name}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Projects Name</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.project_id}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Projects ID</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.project_cost}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Project Cost</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.actual_cost}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Variations(Cost)</p>
                        </div>
                        <div className="col-xl-2 col-sm-6 text-right">
                          <button
                            type="button"
                            className="profile_edit"
                            title="Edit Project"
                          >
                            <i className="bx bx-pencil" />
                          </button>
                          <button
                            type="button"
                            className="add_user_proifle"
                            title="Add Project"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="add_company_proifle"
                            title="View"
                          >
                            <i className="bx bx-user-plus" />
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              <i className="bx bx-calendar me-1" /> {project.startDate}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Projects Start Date</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              <i className="bx bx-calendar me-1" /> {project.endDate}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">
                            Projects Complete Date
                          </p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              <i className="bx bx-map me-1" /> {project.project_city}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">City</p>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              <i className="bx bx-map me-1" /> {project.project_district}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">District</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.project_state}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">State</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              {project.project_pincode}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Pincode</p>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                          <h5 className="text-truncate font-size-15 mr-b-2 ">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              <i className="bx bx-map me-1" /> {project.project_agency}
                            </a>
                          </h5>
                          <p className="text-muted mb-4">Execution Agency</p>
                        </div>
                      </div>
                      <div className="avatar-group">
                        <div className="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            className="d-inline-block"
                          >
                            <img
                              src="assets/images/avatar-3.jpg"
                              alt=""
                              className="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div className="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            className="d-inline-block"
                          >
                            <img
                              src="assets/images/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div className="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            className="d-inline-block"
                          >
                            <div className="avatar-xs">
                              <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                A
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            className="d-inline-block"
                          >
                            <img
                              src="assets/images/avatar-2.jpg"
                              alt=""
                              className="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div className="avatar-group-item pro_prti_user">
                          4+ Users Participate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-top">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-3">
                      <b> Project Status :</b>{" "}
                      <span className="badge bg-warning">Ongoing</span>
                    </li>
                    <li className="list-inline-item me-3">
                      Lorem Ipsum is simply dummy text of the printing and of
                      the printing and type setting industry
                    </li>
                    <li className="list-inline-item me-3"></li>
                  </ul>
                </div>
              </div>
            </div>
            <p />
          </div>
          <Drawing/>
          <Project_chat/>
        </div>
        {/* container-fluid */}
      </div>
      {/* End Page-content */}
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
    {/* end main content*/}
  </div>
</>

  );
}

export default ProjectDetails;
