import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import "../css/dashboard.css";

const Form = ({ sidebarState, setSidebarState }) => {
    return (
        <div className="main d-flex min-vh-100 flex-nowrap">
            <Sidebar activeItem={'form'} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
            <main className="d-flex min-vh-100 flex-column flex-grow-1 overflow-y-scroll">
                <Navbar />
                <div className="content bg-white flex-grow-1">
                    <div className="px-lg-5 py-lg-3 p-2 h-100">
                        <div className="d-flex flex-wrap justify-content-between h-100 gap-3">
                            <div className="form">
                                <div className="card h-100 form-border">
                                    <div className="card-body">
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Title</label>
                                            <input type="text" class="form-control border-black" name="title" id="title-input" placeholder="Enter Title" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Start Time</label>
                                            <input type="text" class="form-control border-black" name="start-time" id="start-time-input" placeholder="starting Time" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">End Time</label>
                                            <input type="text" class="form-control border-black" name="end-time" id="end-time-input" placeholder="end Time" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Status Choise</label>
                                            <select class="form-select" name="status"  id="status-select">
                                                <option selected>Select</option>
                                                <option value="On Going">On Going</option>
                                                <option value="Arrived">Arrived</option>
                                                <option value="OverDue">OverDue</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Approved">Approved</option>
                                                <option value="Rejected">Rejected</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-divider"></div>
                            <div className="form">
                                <div className="card h-100 form-border">
                                    <div className="card-body">
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Status</label>
                                            <input type="text" class="form-control border-black" name="status-in" id="status-input" placeholder="pending" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Expected arrival</label>
                                            <input type="text" class="form-control border-black" name="arrival" id="arrival-input" placeholder="arrival" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Requester ID</label>
                                            <input type="text" class="form-control border-black" name="req-id" id="requester-id-input" placeholder="ID" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Requeste Time</label>
                                            <input type="text" class="form-control border-black" name="req-time-id" id="requeste-time-input" placeholder="request time" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label fw-semibold">Description</label>
                                            <textarea class="form-control border-black" name="req-time-id" rows={5} id="description-input" placeholder="description"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Form
