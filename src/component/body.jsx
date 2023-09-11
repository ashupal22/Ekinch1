import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle case when token is not present
        return;
      }

      // Make a GET request to fetch user details
      const response = await axios.get('http://localhost:5000/user-details', {
        headers: {
          Authorization: token,
        },
      });

      // Set the user details in state
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <div>   {/* Begin page */}
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/ekinch-res.png" alt="" height={45} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/ekinch-logo.png" alt="" height={50} />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height={19} />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item"
              id="vertical-menu-btn"
            >
              <img src="assets/images/menu.svg" />
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-envelope" />
                <span className="badge bg-danger rounded-pill message_panel">
                  2
                </span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Inbox{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="head_noti">
                  <div data-simplebar="" style={{ maxHeight: 230 }}>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-your-order">
                            Your order is placed
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">
                              It will seem like simplified English.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell" />
                <span className="badge bg-danger rounded-pill notific_panel">
                  3
                </span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div className="head_noti">
                  <div data-simplebar="" style={{ maxHeight: 230 }}>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-your-order">
                            Your order is placed
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">
                              It will seem like simplified English.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-shipped">
                            Your item is shipped
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-occidental">
                              As a skeptical Cambridge friend of mine occidental.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="#"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1" />{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item p-t-15"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1 textleft">
                {userDetails.name} {}
                  <p>{userDetails.Mobile}</p>
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="/profile">
                  <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                  <span>My Profile</span>
                </a>
                <a className="dropdown-item d-block" href="#">
                  <i className="bx bx-cog font-size-16 align-middle me-1" />{" "}
                  <span>Settings</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="/logout">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ========== Left Sidebar Start ========== */}
      <div className="vertical-menu">
        <div data-simplebar="" className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="active">
                <a href="/">
                  <i className="bx bx-grid-alt" />
                  <span>Dashboards</span>
                </a>
              </li>
              <li>
                <a href="#" className="has-arrow waves-effect">
                  <i className="bx bx-receipt" />
                  <span>Projects</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <a href="/all-project">View Projects</a>
                  </li>
                  <li>
                    <a href="/add-project">Add Projects </a>
                  </li>
                  <li>
                    <a href="/add-User">Add Users </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="has-arrow">
                  <i className="bx bx-briefcase-alt-2" />
                  <span>Execution Agency</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <a href="/agencies">View Agencies</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="has-arrow">
                  <i className="bx bx-map-alt" />
                  <span>Tenders</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <a href="/tenders">View Tenders</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="chats">
                  <i className="bx bx-message" />
                  <span>Messages</span>
                </a>
              </li>
              <li>
                <a href="notifications">
                  <i className="bx bx-bell" />
                  <span>Notifications</span>
                </a>
              </li>
              <li>
                <a href="#" className="has-arrow">
                  <i className="bx bx-cog" />
                  <span>Settings</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="#">Change Password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/logout">
                  <i className="bx bx-power-off" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
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
    <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/apexcharts/apexcharts.min.js"></script>
        <script src="assets/js/pages/dashboard.init.js"></script>
        <script src="assets/js/app.js"></script>		
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="assets/js/owl.carousel.min.js"> </script>
  <script src="main.js"></script>
  </>
  )
}

export default Body