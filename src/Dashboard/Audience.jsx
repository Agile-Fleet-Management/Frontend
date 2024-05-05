import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/dashboard.css";
import AddUserModal from "../Modals/AddUser";
import {
  fetchAudiences,
  deleteAudience,
  updateUser,
  addAudience,
} from "../services/audienceService";

const Audience = ({ sidebarState, setSidebarState }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [audiences, setAudiences] = useState([]);
  const [editAudienceId, setEditAudienceId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [editFormData, setEditFormData] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    role: "",
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    console.log("Role selected:", event.target.value); // Debugging log
    setSelectedRole(event.target.value);
  };
  

  const filteredAudiences = audiences.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const matchesName = fullName.includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === '' || user.role === selectedRole;
    console.log(`Checking role: user's role='${user.role}', selected='${selectedRole}', matches=${matchesRole}`);
    return matchesName && matchesRole;
  });
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditClick = (user) => {
    setEditAudienceId(user.id);
    setEditFormData(user);
  };

  const handleSaveClick = async () => {
    try {
      console.log("Updating vehicle with data:", editFormData); // Log the data being sent
      const updatedData = await updateUser(editFormData.id, editFormData);
      if (updatedData) {
        const updatedAudiences = audiences.map((user) =>
          user.id === updatedData.id ? updatedData : user
        );
        setAudiences(updatedAudiences);
        setEditAudienceId(null);
      } else {
        alert("Failed to update the vehicle.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      alert("Update Successfully");
    }
  };

  const handleDeleteAudience = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const success = await deleteAudience(id);

      if (success) {
        setAudiences((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("Vehicle deleted successfully.");
      } else {
        alert("Failed to delete the vehicle.");
      }
    }
  };

  useEffect(() => {
    const loadAudiences = async () => {
      try {
        const data = await fetchAudiences();
        if (Array.isArray(data)) {
          console.log("Roles loaded:", Array.from(new Set(data.map(user => user.role))));
          setAudiences(data);
        } else {
          console.error("Data is not an array:", data);
          setAudiences([]);
        }
      } catch (error) {
        console.error("Error fetching audiences:", error);
        setAudiences([]);
      }
    };
    loadAudiences();
  }, []);
  

  return (
    <div className="main d-flex min-vh-100 flex-nowrap">
      <Sidebar
        activeItem={"audiences"}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <main className="d-flex min-vh-100 flex-column flex-grow-1 overflow-y-scroll">
        <Navbar />
        <div className="content bg-white flex-grow-1">
          <div className="px-lg-5 py-lg-3 p-2">
            {/* Search & Filters */}
            <div className="row g-0">
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control bg-light px-4 fw-semibold rounded-end-0"
                  name="search"
                  id="search-input"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="col-md-2">
                <select
                  className="form-select px-4 bg-light fw-semibold rounded-start-0 rounded-end-0"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option value="">All Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div className="col-md-auto col-sm-1">
                <button className="btn rounded-start-0 btn-main w-100">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-main table-hover w-100 word-wrp">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAudiences.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      {editAudienceId === user.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="first_name"
                              value={editFormData.first_name}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="last_name"
                              value={editFormData.last_name}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              value={editFormData.email}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="role"
                              value={editFormData.role}
                              onChange={handleInputChange}
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                        </>
                      )}
                      <td className="d-flex gap-3 align-items-center justify-content-center">
                        <button
                          onClick={handleSaveClick}
                          className="btn btn-success"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => handleEditClick(user)}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAudience(user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-main px-3 py-2 mt-3"
              onClick={() => setShowAddModal(true)}
            >
              New User
            </button>
          </div>
        </div>
      </main>
      <AddUserModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        hide={() => setShowAddModal(false)}
      />
    </div>
  );
};

export default Audience;
