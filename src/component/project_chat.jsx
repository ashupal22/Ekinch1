import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Project_chat = () => {
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
    <div className="tab-pane mb-5" id="messages" role="tabpanel">
    <p className="mb-0"></p>
    <div className="col-xl-12 col-sm-6">
      <div className="card br-rad">
        <div className="card-body ex-psce_pro">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="all_ticekt_panel">
                  {" "}
                  <div className="row">
                    <div className="col-lg-8">
                      {" "}
                      <h4 className="card-title ticket_num_all">
                        Project Id : #GHJ562123JK
                      </h4>
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="mb-1 row">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-4 col-form-label text-right"
                        >
                          {" "}
                          Project Status
                        </label>
                        <div className="col-md-8">
                          <select
                            className="form-select inpt_width_tickt gry_bg"
                            id="autoSizingSelect"
                          >
                            <option selected="">Open</option>
                            <option value={1}>Closed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="ticket_detial_left">
                    <div className="row">
                      <div className="col-lg-4 left_tick_cont">
                        <div className="overflow-hidden me-auto mb-3">
                          <h5 className="font-size-14 text-truncate mb-1">
                            Project Create
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                            Superadmin
                          </p>
                        </div>
                        <div className="overflow-hidden me-auto mb-3">
                          <h5 className="font-size-14 text-truncate mb-1">
                            Project Name
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                          {project.project_name}
                          </p>
                        </div>
                        <div className="overflow-hidden me-auto mb-3">
                          <h5 className="font-size-14 text-truncate mb-1">
                            Start Date
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                          {project.startDate}
                          </p>
                        </div>
                        <div className="overflow-hidden me-auto mb-3">
                          <h5 className="font-size-14 text-truncate mb-1">
                            Complete Date
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                          {project.endDate}
                          </p>
                        </div>
                        <div className="overflow-hidden me-auto mb-3">
                          <h5 className="font-size-14 text-truncate mb-1">
                          Execution Agency
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                          {project.project_agency} 
                          </p>
                        </div>
                        <div className="overflow-hidden me-auto">
                          <h5 className="font-size-14 text-truncate mb-1">
                            Email Address
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                            superadmin@ekinch.com
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-0-l-r">
                        <div className="convr_heading">
                          Project Conversation
                        </div>
                        <div className="container coment_panel_space">
                          <div className="row mb-3">
                            <div className="col-lg-1 col-md-1 col-sm-6 text-right col-xs-12 p-r-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                  S
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-6 textt-left col-xs-12 p-l-0 pl-5">
                              <div className="pl-0">
                                <h5 className="h6 mb-0">
                                  Sanjay Singh
                                  <p className="coment_para">
                                    Lorem Ipsum is simply dummy text of
                                    the of type and scrambled it to
                                    make.
                                  </p>
                                  <span className="font-size-10">
                                    10-04-2022 | 12:30 PM
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="m-l-80">
                            <div className="row">
                              <div className="col-lg-1 col-md-1 col-sm-6 text-right col-xs-12 p-r-0">
                                <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-warning text-white font-size-16">
                                    R
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-11 col-md-11 col-sm-6 textt-left col-xs-12 p-l-0 mb-2 pl-5">
                                <div className="pl-0">
                                  <h5 className="h6 mb-0">
                                    Rahul Sharma (SDM)
                                    <p className="coment_para">
                                      Lorem Ipsum is simply dummy text
                                      of the of type and scrambled it to
                                      make.
                                    </p>
                                    <span className="font-size-10">
                                      10-04-2022 | 12:30 PM
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="m-l-80">
                            <div className="row">
                              <div className="col-lg-1 col-md-1 col-sm-6 text-right col-xs-12 p-r-0">
                                <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-pink text-white font-size-16">
                                    S
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-11 col-md-11 col-sm-6 textt-left col-xs-12 p-l-0 pl-5">
                                <div className="pl-0">
                                  <h5 className="h6 mb-0">
                                    Sanjay Singh
                                    <p className="coment_para">
                                      Lorem Ipsum is simply dummy text
                                      of the of type and scrambled it to
                                      make.
                                    </p>
                                    <span className="font-size-10">
                                      10-04-2022 | 12:30 PM
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-1 col-md-1 col-sm-6 text-right col-xs-12 p-r-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                  V
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-6 textt-left col-xs-12 p-l-0 pl-5">
                              <div className="pl-0">
                                <h5 className="h6 mb-0">
                                  Vijay Bakshi (Architecture)
                                  <p className="coment_para">
                                    Lorem Ipsum is simply dummy text of
                                    the of type and scrambled it to make
                                    a type specimen book.
                                  </p>
                                  <span className="font-size-10">
                                    10-04-2022 | 12:30 PM
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        <div className="main_file_panel">
                         
                          <div className="relp_are">
                            {" "}
                            <textarea
                              required=""
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                          <hr />
                          <div className="row pad-10">
                            <div className="col-lg-6 space_tb">
                              <i className="bx bx-link font-size-22 cor_brn" />{" "}
                            </div>
                            <div className="col-lg-6 text-right">
                              <button
                                type="button"
                                className="btn login_btn"
                                id="clearlasttoast"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end table-responsive */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p />
  </div>
  )
}

export default Project_chat