import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import "../css/dashboard.css";
import car from "../Assets/svg/car.svg";
import semi from "../Assets/svg/semi.svg";
import suv from "../Assets/svg/suv.svg";
import truck from "../Assets/svg/truck.svg";

const Vehicles = ({ sidebarState, setSidebarState }) => {
    return (
        <div className="main d-flex min-vh-100 flex-nowrap">
            <Sidebar activeItem={'vehicles'} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
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
                                                <h5 className="mb-0">8</h5>
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
                                                <h5 className="mb-0">15</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="p-4">
                                                <img src={suv} alt="Dashboard" />
                                            </div>
                                            <div>
                                                <h6 className="text-muted">SUVs</h6>
                                                <h5 className="mb-0">9</h5>
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
                                                <h5 className="mb-0">9</h5>
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
                                        <th>Vehicle ID</th>
                                        <th>Type</th>
                                        <th>Model</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (new Array(6)).fill(0).map((_, i) => {
                                            return <tr key={i}>
                                                <td>Text</td>
                                                <td>Text</td>
                                                <td>Text</td>
                                                <td>Text</td>
                                                <td>Text</td>
                                                <td className="d-flex gap-3 align-items-center justify-content-center">
                                                    <a href="" className="text-main text-decoration-none ">Edit</a>
                                                    <div className="divider"></div>
                                                    <a href="" className="text-main text-decoration-none ">Delete</a>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Vehicles
