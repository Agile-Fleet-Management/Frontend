import React, { useEffect, useState } from "react";
import {
  fetchVehicles,
  deleteVehicle,
  updateVehicle,
} from "../services/vehicleService";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import "../css/dashboard.css";
import car from "../Assets/svg/car.svg";
import semi from "../Assets/svg/semi.svg";
import suv from "../Assets/svg/suv.svg";
import truck from "../Assets/svg/truck.svg";

const Vehicles = ({ sidebarState, setSidebarState }) => {
  const [vehicles, setVehicles] = useState([]);

  const [editVehicleId, setEditVehicleId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    id: "",
    transport: "",
    model: "",
    age: "",
    status: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditClick = (vehicle) => {
    setEditVehicleId(vehicle.id);
    setEditFormData(vehicle);
  };


  const handleSaveClick = async () => {
    try {
        console.log("Updating vehicle with data:", editFormData); // Log the data being sent
        const updatedData = await updateVehicle(editFormData.id, editFormData);
        if (updatedData) {
            // Successfully updated the vehicle
            const updatedVehicles = vehicles.map(vehicle =>
                vehicle.id === updatedData.id ? updatedData : vehicle
            );
            setVehicles(updatedVehicles);
            setEditVehicleId(null);
            alert("Vehicle updated successfully.");
        } else {
            // If no data was returned, consider the update failed
            alert("Failed to update the vehicle.");
        }
    } catch (error) {
        console.error("Error updating vehicle:", error);
        if (error.response) {
            // More detailed error information from server response
            console.error("Server responded with:", error.response.data);
        } else {
            // Generic error alert if no response from the server
            alert("Update failed: Network or server error.");
        }
    }
};




  const handleDeleteVehicle = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      const success = await deleteVehicle(id);

      if (success) {
        setVehicles((prevVehicles) =>
          prevVehicles.filter((vehicle) => vehicle.id !== id)
        );
        alert("Vehicle deleted successfully.");
      } else {
        alert("Failed to delete the vehicle.");
      }
    }
  };

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicles();
        if (Array.isArray(data)) {
          setVehicles(data);
          setVehicles(prevVehicles => ([
            ...prevVehicles,
            // Cars
            { id: 101, transport: "Voiture", model: "Toyota Camry", age: 3, status: "maintenance" },
            { id: 102, transport: "Voiture", model: "Honda Civic", age: 4, status: "available" },
            { id: 103, transport: "Voiture", model: "Ford Mustang", age: 2, status: "booked" },
            // SUVs
            { id: 201, transport: "SUV", model: "Jeep Grand Cherokee", age: 1, status: "maintenance" },
            { id: 202, transport: "SUV", model: "Ford Explorer", age: 2, status: "available" },
            { id: 203, transport: "SUV", model: "Chevrolet Tahoe", age: 3, status: "available" },
            { id: 204, transport: "SUV", model: "Toyota RAV4", age: 1, status: "booked" },
            // Trucks
            { id: 301, transport: "Camion", model: "Ford F-150", age: 3, status: "maintenance" },
            { id: 302, transport: "Camion", model: "Chevrolet Silverado", age: 4, status: "available" },
            // Semi
            { id: 401, transport: "Semi", model: "Tesla Semi", age: 1, status: "booked" }
          ]));
        } else {
          console.error("Data is not an array:", data);
          setVehicles([]);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setVehicles([]);
      }
    };
    loadVehicles();
  }, []);

  return (
    <div className="main d-flex min-vh-100 flex-nowrap">
      <Sidebar
        activeItem={"vehicles"}
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <main className="d-flex flex-column flex-grow-1 overflow-y-scroll">
        <Navbar />
        <div className="bg-white flex-grow-1">
          <div className="px-lg-5 py-lg-3 p-2">
            {/* States / Data */}
            <div className="card border-0 shadow-sm mb-4 rounded-4 p-2">
              <div className="card-body">
                <div className="row justify-content-around flex-wrap">
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="p-4">
                        <img src={car} alt="Dashboard" />
                      </div>
                      <div>
                        <h6 className="text-muted">Car</h6>
                        <h5 className="mb-0">3</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="p-4">
                        <img src={semi} alt="Dashboard" />
                      </div>
                      <div>
                        <h6 className="text-muted">Semi</h6>
                        <h5 className="mb-0">1</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="p-4">
                        <img src={suv} alt="Dashboard" />
                      </div>
                      <div>
                        <h6 className="text-muted">SUV</h6>
                        <h5 className="mb-0">4</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="p-4">
                        <img src={truck} alt="Dashboard" />
                      </div>
                      <div>
                        <h6 className="text-muted">Truck</h6>
                        <h5 className="mb-0">2</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="table-responsive">
              <table className="table table-main table-hover">
                <thead>
                  <tr>
                    <th>Voiture ID</th>
                    <th>Type</th>
                    <th>Modèle</th>
                    <th>Age</th>
                    <th>Statut</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.id}>
                      <td>{vehicle.id}</td>
                      {editVehicleId === vehicle.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="transport"
                              value={editFormData.transport}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="model"
                              value={editFormData.model}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="age"
                              value={editFormData.age}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="status"
                              value={editFormData.status}
                              onChange={handleInputChange}
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{vehicle.transport}</td>
                          <td>{vehicle.model}</td>
                          <td>{vehicle.age}</td>
                          <td>{vehicle.status}</td>
                        </>
                      )}
                      <td className="d-flex gap-3 align-items-center justify-content-center">
                      <button onClick={handleSaveClick} className="btn btn-success">Enregistrer</button>

                        <button
                          onClick={() => handleEditClick(vehicle)}
                          className="btn btn-primary"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                          className="btn btn-danger"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vehicles;