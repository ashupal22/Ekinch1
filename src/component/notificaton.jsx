import React from 'react'

const Notifications = () => {
  return (
<div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Notification</h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                <li className="breadcrumb-item active">Notification</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-0">
        <div className="col-lg-12">
          <div className="notifica_panel">
            <div className="row">
              <div className="col-lg-4">
                <h4 className="card-title">Notification List</h4>
              </div>
              <div className="col-lg-8 mb-2">
                <form className="row">
                  <div className="col-sm-auto p-0-l-r mr-22">
                    <div className="input-group" id="datepicker2">
                      <input
                        type="text"
                        className="form-control inpt_width cale_inpt_noti"
                        placeholder="dd M, yyyy"
                        data-date-format="dd M, yyyy"
                        data-date-container="#datepicker2"
                        data-provide="datepicker"
                        data-date-autoclose="true"
                      />
                    </div>
                  </div>
                  <div className="col-sm-auto p-0-l-r mr-22">
                    <label className="visually-hidden" htmlFor="autoSizingSelect">
                      Preference
                    </label>
                    <select className="form-select noti_width" id="autoSizingSelect">
                      <option selected>Notification Category</option>
                      <option value="1">Construction</option>
                      <option value="2">Chat</option>
                      <option value="2">Project</option>
                      <option value="2">Tendor</option>
                    </select>
                  </div>
                  <div className="col-sm-auto p-0-l-r">
                    <div className="input-group noti_serach_list position-relative bg_white">
                      <input type="text" className="form-control" placeholder="Search by date, name and project" />
                      <span className="bx bx-search-alt"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="main_noti-_apnel">
                <div data-simplebar className="mt-2" style={{ maxHeight: "580px" }}>
                  <ul className="noti-timeline list-unstyled">
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Project Funding Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Project</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Tendor Funding Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Tendor</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Construction Project Development Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Construction</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Project Funding Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Project</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Project Funding Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Project</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <div className="noti_cricle"></div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-1 posi_relative">
                          <div className="time_dt">
                            <span>Today</span>
                            <h5>012:35 PM</h5>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="tag_panel">
                            <h4>Project Funding Issue</h4>
                            Lorem Ipsum is simply dummy text of the printing text of the printing setting industry
                            Lorem Ipsum is simply dummy text of the printing text of the printing.
                            <div className="wallet_al_tag">
                              <a href="javascript: void(0);">Project</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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
  </div>
</div>  )
}

export default Notifications