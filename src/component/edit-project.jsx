import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit_project = () => {
  const { projectId } = useParams();
  const [formData, setFormData] = useState({
    project_id: '',
    project_name: '',
    project_city: '',
    project_district: '',
    project_state: '',
    project_pincode: '',
    project_cost: '',
    actual_cost: '',
    bit_cost: '',
    startDate: '',
    endDate: '',
    project_agency: '',
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/projects/${projectId}`);
        const projectData = response.data;
        setFormData({
          project_id: projectData.project_id,
          project_name: projectData.project_name,
          project_city: projectData.project_city,
          project_district: projectData.project_district,
          project_state: projectData.project_state,
          project_pincode: projectData.project_pincode,
          project_cost: projectData.project_cost,
          actual_cost: projectData.actual_cost,
          bit_cost: projectData.bit_cost,
          startDate: projectData.startDate,
          endDate: projectData.endDate,
          project_agency: projectData.project_agency
        });
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectId
]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send an HTTP PUT request to update the project details
      await axios.put(`http://localhost:5000/project-update/${projectId}`, formData);
      // Redirect or show a success message after successful update
      console.log('Project details updated successfully!');
    } catch (error) {
      console.error('Error updating project details:', error);
    }
  };

    return (
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Add Projects</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Dashboards</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Projects</a>
                        </li>
                        <li className="breadcrumb-item active">Add Projects</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body frm_space">
                      <div className="d-flex align-items-start all_field">
                        <div className="me-2">
                          <h6 className="mb-2 pt-2">All fields are mandatory*</h6>
                        </div>
                        <div className="dropdown ms-auto mb-2">
                          <button type="button" className="btn btn-light waves-effect">
                            Add More +
                          </button>
                        </div>
                      </div>
    
                      <form method="post" onSubmit={handleFormSubmit}  className="custom-validation font-14">
                        <div className="mb-0">
                          <label>Unique Project ID* :</label>
                        </div>
    
                        <div className="input-group mb-3">
                          <button type="button" className="btn btn-primary gener_btn" data-method="getDate" data-target="#putDate">
                            Generate ID
                          </button>
                          <input name="project_id" type="text" className="form-control" required data-parsley-maxlength="6" placeholder="Project-ID" value={formData.project_id} onChange={handleInputChange} />
                        </div>
    
                        <div className="mb-3">
                          <label>Name of the project* :</label>
                          <div>
                            <input type="text" value={formData.project_name} name="project_name" className="form-control" required data-parsley-minlength="6" placeholder="Enter project name" onChange={handleInputChange} />
                          </div>
                        </div>
    
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-email-input" className="form-label">City*</label>
                              <select value={formData.project_city} name="project_city" className="form-select" onChange={handleInputChange}>
                                <option>Select City/Town</option>
                                <option>Dehradun</option>
                                <option>Haridwar</option>
                                <option>Rishikesh</option>
                                <option>Nainital</option>
                                <option>Mussoorie</option>
                                <option>Haldwani</option>
                                <option>Rudrapur</option>
                                <option>Almora</option>
                                <option>Pithoragarh</option>
                                <option>Chamoli</option>
                                <option>Tehri</option>
                                <option>Pauri</option>
                                <option>Udham Singh Nagar</option>
                                <option>Champawat</option>
                                <option>Uttarkashi</option>
                                <option>Bageshwar</option>
                                <option>Kashipur</option>
                                <option>Kotdwar</option>
                                <option>Ranikhet</option>
                                <option>Srinagar</option>
                                <option>Kichha</option>
                                <option>Ramnagar</option>
                                <option>Manglaur</option>
                                <option>Jaspur</option>
                                <option>Laksar</option>
                                <option>Khatima</option>
                                <option>Sitarganj</option>
                                <option>Chamba</option>
                                <option>Narendranagar</option>
                                <option>Rudraprayag</option>
                                <option>Joshimath</option>
                                <option>Dwarahat</option>
                                <option>Gangotri</option>
                                <option>Yamunotri</option>
                                <option>Bhowali</option>
                                <option>Bhimtal</option>
                                <option>Mukteshwar</option>
                                <option>Karnaprayag</option>
                                <option>Didihat</option>
                                <option>Bajpur</option>
                                <option>Devprayag</option>
                                <option>Lansdowne</option>
                                <option>Kanda</option>
                                <option>Pauri Garhwal</option>
                                <option>Berinag</option>
                                <option>Lohaghat</option>
                                <option>Chakrata</option>
                                <option>Kedarnath</option>
                                <option>Badrinath</option>
                                <option>Gangolihat</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-password-input" className="form-label">District*</label>
                              <select value={formData.project_district}name="project_district" className="form-select" onChange={handleInputChange}>
                                <option>Select District</option>
                                <option>Almora</option>
                                <option>Bageshwar</option>
                                <option>Chamoli</option>
                                <option>Champawat</option>
                                <option>Dehradun</option>
                                <option>Haridwar</option>
                                <option>Nainital</option>
                                <option>Pauri Garhwal</option>
                                <option>Pithoragarh</option>
                                <option>Rudraprayag</option>
                                <option>Tehri Garhwal</option>
                                <option>Udham Singh Nagar</option>
                                <option>Uttarkashi</option>
                              </select>
                            </div>
                          </div>
                        </div>
    
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-email-input" className="form-label">State*</label>
                              <select value={formData.project_state}name="project_state" className="form-select" onChange={handleInputChange}>
                                <option>Select State</option>
                                <option>Uttrakhand</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-password-input" className="form-label">Pincode*</label>
                              <input type="number" value={formData.project_pincode}name="project_pincode" className="form-control" required data-parsley-maxlength="6" placeholder="Enter pincode" onChange={handleInputChange} />
                            </div>
                          </div>
                        </div>
    
                        <div className="mb-3">
                          <label>Cost of the Project*</label>
                          <div>
                            <input type="text" value={formData.project_cost}name="project_cost" className="form-control" required data-parsley-maxlength="6" placeholder="Enter project cost" onChange={handleInputChange} />
                          </div>
                        </div>
    
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-email-input" className="form-label">Variations(Cost)*</label>
                              <input type="text" value={formData.actual_cost} name="actual_cost" className="form-control" required data-parsley-maxlength="6" placeholder="Enter actual cost" onChange={handleInputChange} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-password-input" className="form-label"></label>
                              <input type="text" value={formData.bit_cost}name="bit_cost" className="form-control mt-2" required data-parsley-maxlength="6" placeholder="Enter bit cost" onChange={handleInputChange} />
                            </div>
                          </div>
                        </div>
    
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-email-input" className="form-label">Start Date*</label>
                              <div className="input-group" id="datepicker1">
                                <input value={formData.startDate} type="number" name="startDate" id="birthday" className="form-control" placeholder="DD-MM-YYYY" title="Please enter a date in the format DD-MM-YYYY" onChange={handleInputChange} />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="formrow-password-input" className="form-label">Complete Date*</label>
                              <div className="input-group" id="datepicker1">
                                <input value={formData.endDate} type="number" name="endDate" id="birthday" className="form-control" placeholder="DD-MM-YYYY" title="Please enter a date in the format DD-MM-YYYY" onChange={handleInputChange} />
                              </div>
                            </div>
                          </div>
                        </div>
    
                        <div className="mb-3">
                          <label>Name of Execution Agency*</label>
                          <div>
                            <select value={formData.project_agency} name="project_agency" className="form-select" onChange={handleInputChange}>
                              <option>Select Agency</option>
                              <option>PWD (Public Works Department)</option>
                              <option>PWD (Public Works Department)</option>
                              <option>PWD (Public Works Department)</option>
                            </select>
                          </div>
                        </div>
    
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex flex-wrap gap-2 flt_right">
                              <button type="reset" className="btn cancel_btn">
                                <a href="/Preview">Preview</a>
                              </button>
                              <button type="submit" className="btn btn-primary waves-effect waves-light login_btn">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
      );
  
}

export default  Edit_project