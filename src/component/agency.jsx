import React from 'react'

const Agency = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">All Agencies</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Agencies</a>
                    </li>
                    <li className="breadcrumb-item active">View Agencies</li>
                    
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
                            placeholder="Search by agency name"
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
                        <th scope="col" style={{ width: '100px' }}>
                          S.No.
                        </th>
                        <th scope="col">Agency Name</th>
                        <th scope="col">Completed Projects</th>
                        <th scope="col">On Going Project</th>
                        <th scope="col">Location</th>
                        <th scope="col">Team Members</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">
                            Ekinch Pvt. Ltd.
                          </h5>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                    A
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/
                                  users/avatar-2.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item m-l-0-mem">
                              40+
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Open</span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">
                            Ekinch Pvt. Ltd.
                          </h5>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item m-l-0-mem">20+</div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Open</span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">
                            Ekinch Pvt. Ltd.
                          </h5>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item m-l-0-mem">20+</div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Open</span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">
                            Ekinch Pvt. Ltd.
                          </h5>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item m-l-0-mem">20+</div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Open</span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">
                            Ekinch Pvt. Ltd.
                          </h5>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td>
                          <div className="avatar-group">
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item">
                              <a href="javascript: void(0);" className="d-inline-block">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                            <div className="avatar-group-item m-l-0-mem">20+</div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Open</span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="main_pagination p-t-0-pro">
                    <div className="pagination">
                      <div className="col-lg-9">Showing 12 of 25 Results</div>
                      <div className="col-lg-3 text-right">
                        <div className="pagination">
                          <a href="#">&laquo;</a>
                          <a href="#">1</a>
                          <a className="active" href="#">
                            2
                          </a>
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

export default Agency