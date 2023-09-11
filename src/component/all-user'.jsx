<div className="col-12">
              <div className="page-title-box page_tle_pd d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18" >All User In This Project</h4>
              </div>
            </div>
          </div>

          <div className="row">            
            <div className="col-lg-12">
              <div className="">
                
                
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "100px" }}>S.No.</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Post</th>
                        <th scope="col">Ongoing Projects</th>
                        <th scope="col">Delete User</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <h5 className="text-truncate font-size-14 m-b-0-mem">Ekinch Pvt. Ltd.</h5>
                        </td>
                        <td><a href="#">24</a></td>
                        <td>10</td>
                        <td>Kanpur, U.P</td>
                        <td><span className="badge bg-success">Open</span></td>
                        <td>
                          <div className="dropdown">
                            <a href="#" className="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="mdi mdi-dots-vertical font-size-18"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">View</a>
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="main_pagination p-t-0-pro">
                    <div className="pagination">                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>






const { projectId } = useParams();
const [users, setUsers] = useState([]);

useEffect(() => {
  const fetchProjectUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/project-users/${projectId}`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching project users:', error);
    }
  };

  fetchProjectUsers();
}, [projectId]);