import axios from 'axios';
import React,{Component} from 'react'


class Drawing extends Component {    
    state = {
 
        selectedCategory: 'Select Category...',
        selectedFile: null
    };
 
    // On file select (from the pop up)
    onFileChange = event => {
 
    this.setState({ selectedFile: event.target.files[0] });
 
    };
 
    onFileUpload = () => {
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
        console.log(this.state.selectedFile);
        axios.post('api/uploadfile', formData);
      };
    handleCategoryChange = event => {
        this.setState({ selectedCategory: event.target.value });
      };
 
    fileData = () => { 
        if (this.state.selectedFile) { 
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p> 
                    <p>File Type: {this.state.selectedFile.type}</p> 
                    <p>Last Modified:{" "}{this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div><br />
                    <h4>Choose before Pressing the Upload button And Also select Category </h4>
                </div>
            );
        }
    };
 
    render() {
  return (
    <div className="tab-pane mb-5" id="profile" role="tabpanel">
            <div className="row">
              <form>
                <div className="projct_draw_main"></div>
              </form>
            </div>
            <p className="mb-0"></p>
            <div className="col-xl-12 col-sm-6">
              <div className="card br-rad">
                <div className="card-body ex-psce_pro">
                  <div className="projct_draw_main">
                    <div className="row">
                      <div className="col-lg-4">
                      <div className="mb-3">
                          <label
                            htmlFor="formrow-inputState"
                            className="form-label"
                          >
                            Drawings Category
                          </label>
                          <select
                        id="formrow-inputState"
                        className="form-select"
                        value={this.state.selectedCategory}
                        onChange={this.handleCategoryChange}
                      >
                        <option value="Select Category...">All Drawings</option>
                        <option value="Architectural Drawings">Architectural Drawings</option>
                        <option value="Electrical Drawings">Electrical Drawings</option>
                        <option value="Structural Drawings">Structural Drawings</option>
                        <option value="Plumbing Drawing">Plumbing Drawing</option>
                        <option value="Fire Fighting Drawings">Fire Fighting Drawings</option>
                        <option value="Tender Documents">Tender Documents</option>
                        <option value="Bills">Bills</option>
                        <option value="Site Drawing">Site Drawing</option>
                        </select>
                        </div>
                      </div>                     
                    </div>
                  </div>
                  <h4 className="card-title mt-2">
                    Project Name_ID
                    <span className="flt_right">45 Drawings</span>
                    
                  </h4>
                  <hr />
                  <div className="row">
                    <div className="col-12">
                      <div className="popup-gallery d-flex flex-wrap">
                        <a
                          href="assets/images/img-7.jpg"
                          title="MVC Building Construction"
                          className="dra_pad"
                        >
                          <div className="img-fluid">
                            <img
                              src="assets/images/img-7.jpg"
                              alt=""
                              width={220}
                            />
                          </div>
                        </a>
                        
                        <a
                          href="assets/images/img-8.jpg"
                          title="MVC Building Construction"
                          className="dra_pad"
                        >
                          <div className="img-fluid">
                            <img
                              src="assets/images/img-8.jpg"
                              alt=""
                              width={220}
                            />
                          </div>
                        </a>
                      </div>                
                      <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p />
          </div>
  );
};
}
export default Drawing