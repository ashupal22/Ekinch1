import React from 'react'

const index = () => {
  return (
    <>
     <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* Alternate direction */}
          <div className="row">
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <h5 className="card-title mb-4">Project Summary</h5>
                    </div>
                    <div className="dropdown ms-auto">
                      <button type="button" className="btn btn-light waves-effect">
                        <i className="bx bx-cloud-upload  font-size-16 align-middle me-2"></i> Export File
                      </button>
                    </div>
                  </div>

                  <div className="row mr-t20s">
                    <div className="col-md-3">
                      <div className="card mini-stats-wid sha_none br-b-0">
                        <div className="main-invoices-detil toal_heading">
                          <div className="d-flex">
                            <div className="flex-shrink-0 align-self-center">
                              <div className="first_invoice">
                                <img src="assets/images/total-project.svg" alt="Total Project" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h4 className="mb-0">1230</h4>
                              <p className="text-muted fw-medium">Total Create Project</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card mini-stats-wid sha_none br-b-0">
                        <div className="main-invoices-detil paid-invoice_heading">
                          <div className="d-flex">
                            <div className="flex-shrink-0 align-self-center">
                              <div className="paid_invoice">
                                <img src="assets/images/complete.svg" alt="Complete Project" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h4 className="mb-0">720</h4>
                              <p className="text-muted fw-medium">Complete Project</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card mini-stats-wid sha_none br-b-0">
                        <div className="main-invoices-detil reject-invoice_heading">
                          <div className="d-flex">
                            <div className="flex-shrink-0 align-self-center">
                              <div className="reject_invoice">
                                <img src="assets/images/ongoing.svg" alt="Ongoing Project" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h4 className="mb-0">390</h4>
                              <p className="text-muted fw-medium">Ongoing Project</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card mini-stats-wid sha_none br-b-0">
                        <div className="main-invoices-detil process-invoice_heading">
                          <div className="d-flex">
                            <div className="flex-shrink-0 align-self-center">
                              <div className="process_invoice">
                                <img src="assets/images/pending.svg" alt="Pending Project" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h4 className="mb-0">167</h4>
                              <p className="text-muted fw-medium">Pending Project</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="card-title mb-4">Project Progress</h4>
                    </div>
                    <div className="col-lg-3 pr-0">
                      <div className="mb-3">
                        <select id="formrow-inputState" className="form-select">
                          <option selected>All Projects</option>
                          <option>Project one</option>
                          <option>Project one</option>
                          <option>Project one</option>
                          <option>Project one</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3 pr-0">
                      <div className="mb-3">
                        <input type="text" className="form-control cale_inpt" id="formrow-inputZip" placeholder="dd M, yyyy" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <img src="assets/images/graph.svg" className="grap_mg" alt="Project Progress Graph" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Recent Project Report</h4>
                  <div style={{ position: 'relative' }}>
                    <img src="assets/images/project_graph.svg" className="grap_mg" alt="Recent Project Report" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="payment-list-detil">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="me-2">
                        <h5 className="card-title mb-4 project_summry">Project Summary</h5>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <form className="tble-app-search d-none d-lg-block">
                        <div className="position-relative">
                          <input type="text" className="form-control" placeholder="Search..." />
                          <span className="bx bx-search-alt" />
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
                          <th className="align-middle">Project Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="javascript: void(0);" className="text-body fw-bold">1</a>
                          </td>
                          <td>GHSF123K</td>
                          <td>Building Construction</td>
                          <td>
                            <i className="mdi mdi-map-marker-radius-outline me-1 font-16" /> Kanpur
                          </td>
                          <td>INR 1cr-2cr</td>
                          <td>12-12-2023</td>
                          <td>12-12-2024</td>
                          <td>EKinch</td>
                          <td>
                            <div>
                              <div style={{ float: 'left' }}>
                                <button
                                  type="button"
                                  className="cpmple_ben btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal"
                                >
                                  Completed
                                </button>
                              </div>
                              <div className="dropdown ms-auto dot_menu">
                                <a className="text-muted font-size-16" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                  <i className="mdi mdi-dots-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end pd_10">
                                  <div className="controls mb-0">
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                      <i className="bx bxs-edit-alt mr-1" />
                                      Edit Project
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="main_pagination">
                      <div className="pagination">
                        <div className="col-lg-9">Showing 12 of 25 Results</div>
                        <div className="col-lg-3 text-right">
                          <div className="pagination">
                            <a href="#">&laquo;</a>
                            <a href="#">1</a>
                            <a className="active" href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">&raquo;</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <h4 className="card-title mb-3">
                  Top Agencies
                  <div className="view_all">
                    View All <i className="mdi mdi-arrow-right ms-1" />
                  </div>
                </h4>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <img src="assets/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle img-thumbnail" />
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <div className="text-muted">
                                <p className="mb-0">Agency</p>
                                <h5 className="mb-1">ABC Architecture</h5>
                                <p className="mb-0">
                                  <i className="mdi mdi-map-marker-radius-outline" /> Noida, Uttar Pradesh
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* end col */}
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
    </>
  )
}

export default index