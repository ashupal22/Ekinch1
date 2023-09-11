import React from 'react'

const Profile = () => {
  return (
    <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Project Details</h4>
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

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9 p-0-l-r">
                  <div className="profile_payer">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center">
                        <div className="text-muted">
                          <h5 className="mb-1">Sanjay Singh</h5>
                          <p className="mb-1">Phone Number:734901672 Email:sanjay@ekinch.com</p>
                          <p className="mb-1">Post in Ekinch</p>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-3">
                            <div>
                              <h5 className="mb-0 font-size-18 up_pro">120</h5>
                              <p className="text-muted text-truncate mb-2">
                                Uploaded Projects
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div>
                              <h5 className="mb-0 font-size-18 com_pro">100</h5>
                              <p className="text-muted text-truncate mb-2">
                                Complete Projects
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div>
                              <h5 className="mb-0 font-size-18 pen_pro">20</h5>
                              <p className="text-muted text-truncate mb-2">
                                Pending Projects
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 align-self-center text-center p-0-l-r">
                  {/* <button
                    type="button"
                    className="btn login_btn"
                    id="clearlasttoast"
                  >
                    <i className="bx bx-pencil"></i> Edit Profile
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="card pro-m-b-0">
            <div className="card-body frm_space frm_pro_spc">
              <div className="row mt-0">
                <div className="col-xl-12">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">
                          Personal Info
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
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">
                          Company Details
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content text-muted pro_dr_bg">
        <div className="tab-pane active mb-2" id="home" role="tabpanel">
          <p className="mb-0">
            <div className="col-xl-12 col-sm-6">
              <div className="card br-rad">
                <div className="card-body ex-psce_pro">
                  <p className="mb-0">
                    <form>
                      <div className="view_unedit_invoice mt-3">
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-firstname-input"
                            className="col-sm-3 col-form-label"
                          >
                          UserName
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="horizontal-firstname-input"
                              placeholder="Sanjay Singh"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-email-input"
                            className="col-sm-3 col-form-label"
                          >
                            Phone Number
                          </label>
                          <div className="col-9">
                            <div className="input-group">
                              <div className="input-group-text bg_white">
                                <select className="slt_main_numb">
                                  <option>+12</option>
                                  <option>+11</option>
                                  <option>+91</option>
                                  <option>+11</option>
                                </select>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroupUsername"
                                placeholder="6789986541"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-password-input"
                            className="col-sm-3 col-form-label"
                          >
                            Email Address
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              className="form-control"
                              id="horizontal-password-input"
                              placeholder="sanjay@ekinch.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="view_unedit_invoice mt-3">                      
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-email-input"
                            className="col-sm-3 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-9 auth-pass-inputgroup">
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control sec-rad"
                                id="horizontal-password-input"
                                placeholder="xxxxxxxxxxxxx"
                              />
                              <button
                                className="btn btn-lightt"
                                type="button"
                                id="password-addon"
                              >
                                <i className="mdi mdi-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-password-input"
                            className="col-sm-3 col-form-label"
                          >
                            Confirm Password
                          </label>
                          <div className="col-sm-9 auth-pass-inputgroup">
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control sec-rad"
                                id="horizontal-password-input"
                                placeholder="xxxxxxxxxxxxx"
                              />
                              <button
                                className="btn btn-lightt"
                                type="button"
                                id="password-addon"
                              >
                                <i className="mdi mdi-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-firstname-input"
                            className="col-sm-3 col-form-label"
                          >
                            Post
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="horizontal-firstname-input"
                              placeholder="Sanjay Singh"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-firstname-input"
                            className="col-sm-3 col-form-label"
                          >
                          Agency/Company/Government Department
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="horizontal-firstname-input"
                              placeholder="Sanjay Singh"
                            />
                          </div>
                        </div>
                        
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-sm-3 text-center">
                          <div>
                            <button
                              type="submit"
                              className="btn login_btn w-md"
                            >
                              Update &amp; Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>
          </p>
        </div>

        <div className="tab-pane mb-5" id="profile" role="tabpanel">
          <div className="row">
            <form>
              <div className="projct_draw_main"></div>
            </form>
          </div>
          <p className="mb-0">
            <div className="col-xl-12 col-sm-6">
              <div className="card br-rad">
                <div className="card-body ex-psce_pro">
                  <p className="mb-0">
                    <form>
                      <div className="view_unedit_invoice mt-3">
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-firstname-input"
                            className="col-sm-4 col-form-label"
                          >
                            Company/Government Department Name
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="horizontal-firstname-input"
                              placeholder="Ekinch"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-email-input"
                            className="col-sm-4 col-form-label"
                          >
                            Industry
                          </label>
                          <div className="col-8">
                            <select className="form-select">
                              <option>Select Industry Type</option>
                              <option>Construciton</option>
                              <option>Public Corporation</option>
                              <option>Manufacturing</option>
                              <option>Service</option>
                              <option>Technology</option>
                              <option>Healthcare</option>
                              <option>Finance</option>
                              <option>Retail</option>
                              < option>Energy</option>
                              <option>Construction</option>
                              <option>Agriculture</option>
                              <option>Transportation and Logistics</option>
                              <option>Entertainment and Media</option>
                              <option>Education</option>

                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-email-input"
                            className="col-sm-4 col-form-label"
                          >
                            Registration Number Of Company
                          </label>
                          <div className="col-8">
                            <input
                              type="password"
                              className="form-control"
                              id="horizontal-password-input"
                              placeholder="78HKG239"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-password-input"
                            className="col-sm-4 col-form-label"
                          >
                            Email Address Of Company
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="password"
                              className="form-control"
                              id="horizontal-password-input"
                              placeholder="info@ekinch.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-password-input"
                            className="col-sm-4 col-form-label"
                          >
                            Phone Number 
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="password"
                              className="form-control"
                              id="horizontal-password-input"
                              placeholder="+11 23677813"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="horizontal-password-input"
                            className="col-sm-4 col-form-label"
                          >
                            Website of Company/Government Department
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="password"
                              className="form-control"
                              id="horizontal-password-input"
                              placeholder="www.ekinch.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-sm-3 text-center">
                          <div>
                            <button
                              type="submit"
                              className="btn login_btn w-md"
                            >
                              Update &amp; Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>
          </p>
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
  </div>
</div>

  )
}

export default Profile