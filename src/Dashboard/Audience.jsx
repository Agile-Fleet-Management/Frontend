import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/dashboard.css";
import { useState } from "react";
import AddUserModal from "../Modals/AddUser";

const Audience = ({ sidebarState, setSidebarState }) => {

    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="main d-flex min-vh-100 flex-nowrap">
            <Sidebar activeItem={'audience'} sidebarState={sidebarState} setSidebarState={setSidebarState}/>
            <main className="d-flex min-vh-100 flex-column flex-grow-1 overflow-y-scroll">
                <Navbar />
                <div className="content bg-white flex-grow-1">
                    <div className="px-lg-5 py-lg-3 p-2">
                        {/* Search & Filters */}
                        <div className="row g-0">
                            <div className="col-md-7">
                                <input type="text" class="form-control bg-light px-4 fw-semibold rounded-end-0" name="search" id="search-input"  placeholder="Search" />
                            </div>
                            <div className="col-md-2">
                                <select  class="form-select px-4 bg-light fw-semibold rounded-start-0 rounded-end-0" name="roles" id="role-select">
                                    <option selected>Role</option>
                                    <option value="">Admin</option>
                                    <option value="">User</option>
                                    <option value="">Manager</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select  class="form-select px-4 bg-light fw-semibold rounded-start-0 rounded-end-0" name="status" id="status-select">
                                    <option selected>Status</option>
                                    <option value="On Going">On Going</option>
                                    <option value="Arrived">Arrived</option>
                                    <option value="OverDue">OverDue</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="col-md-auto col-sm-1">
                                <button className="btn rounded-start-0 btn-main w-100">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>

                        {/* States / Data */}
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <div className="card border-0 shadow-sm my-4 rounded-4 p-2">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-around flex-wrap gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-4" style={{backgroundColor: "#FFF2E9", borderRadius: 11.26}}>
                                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87135 16.6391H15.578C16.0081 16.6391 16.3648 16.2974 16.3648 15.8855C16.3648 15.4735 16.0081 15.1419 15.578 15.1419H9.87135C9.44125 15.1419 9.08458 15.4735 9.08458 15.8855C9.08458 16.2974 9.44125 16.6391 9.87135 16.6391ZM13.4171 10.1178H9.87135C9.44125 10.1178 9.08458 10.4595 9.08458 10.8714C9.08458 11.2834 9.44125 11.615 9.87135 11.615H13.4171C13.8472 11.615 14.2038 11.2834 14.2038 10.8714C14.2038 10.4595 13.8472 10.1178 13.4171 10.1178ZM20.9034 9.23946C21.15 9.23676 21.4184 9.23382 21.6624 9.23382C21.9247 9.23382 22.1345 9.43478 22.1345 9.68598V17.7645C22.1345 20.2564 20.0259 22.276 17.4243 22.276H9.07409C6.34662 22.276 4.12268 20.1559 4.12268 17.5435V6.71179C4.12268 4.2199 6.24172 2.18018 8.85379 2.18018H14.4556C14.7283 2.18018 14.9381 2.39118 14.9381 2.64238V5.87781C14.9381 7.71658 16.5222 9.22377 18.4419 9.23382C18.8903 9.23382 19.2856 9.237 19.6316 9.23978C19.9007 9.24194 20.14 9.24387 20.3511 9.24387C20.5004 9.24387 20.694 9.24175 20.9034 9.23946ZM21.1926 7.77258C20.3303 7.77559 19.3138 7.77258 18.5827 7.76554C17.4224 7.76554 16.4668 6.85018 16.4668 5.73888V3.09024C16.4668 2.65718 17.0154 2.44215 17.3291 2.75464C17.8971 3.32034 18.6777 4.09803 19.4547 4.87207C20.229 5.64338 20.9996 6.41105 21.5525 6.96171C21.8588 7.26616 21.6343 7.77157 21.1926 7.77258Z" fill="#FF6A00"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="text-muted">Missions</h6>
                                                    <h5 className="mb-0">3</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-4" style={{backgroundColor: "#EDE8FF", borderRadius: 11.26}}>
                                                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85992 3.46383C9.036 3.58437 9.31995 3.86124 9.31995 3.86124C10.4223 4.84105 12.0826 7.27803 12.6158 8.51443C12.627 8.51443 12.9432 9.24958 12.9556 9.59925V9.6458C12.9556 10.1816 12.6394 10.6829 12.131 10.9395C11.9214 11.0453 11.4116 11.1436 11.1657 11.1911C11.0842 11.2068 11.0317 11.217 11.0286 11.2199C10.302 11.325 9.18728 11.3942 7.96342 11.3942C6.6788 11.3942 5.5157 11.325 4.80023 11.1961C4.78783 11.1961 4.13436 11.0684 3.91612 10.986C3.60117 10.8583 3.33457 10.6244 3.16469 10.3332C3.04318 10.1005 2.98366 9.85465 2.98366 9.59925C2.99482 9.33073 3.17709 8.82949 3.26141 8.63138C3.7946 7.32458 5.53926 4.82912 6.60564 3.87318C6.71641 3.76656 6.84248 3.65487 6.9302 3.57716C6.977 3.53569 7.01289 3.50389 7.02971 3.4877C7.29631 3.28959 7.62366 3.18457 7.97582 3.18457C8.28953 3.18457 8.60449 3.27766 8.85992 3.46383ZM20.1781 10.3806C20.1781 10.9069 19.7355 11.333 19.1886 11.333C18.6418 11.333 18.1991 10.9069 18.1991 10.3806L17.9263 5.77981C17.9263 5.10909 18.4918 4.56607 19.1886 4.56607C19.8855 4.56607 20.4497 5.10909 20.4497 5.77981L20.1781 10.3806ZM23.2415 13.4692C23.5565 13.5981 23.8231 13.8308 23.9929 14.1221C24.1145 14.3548 24.174 14.6006 24.174 14.8572C24.1628 15.1246 23.9805 15.627 23.895 15.8251C23.363 17.1308 21.6171 19.6263 20.552 20.5834C20.4431 20.6874 20.3195 20.7968 20.232 20.8742L20.2319 20.8744L20.2319 20.8744L20.2318 20.8744C20.1829 20.9177 20.1453 20.951 20.1279 20.9677C19.8601 21.1658 19.534 21.2709 19.1831 21.2709C18.8669 21.2709 18.5519 21.1778 18.2977 20.9904C18.1216 20.871 17.8377 20.5942 17.8377 20.5942C16.7341 19.6155 15.075 17.1773 14.5418 15.9409C14.5294 15.9409 14.2145 15.2069 14.2021 14.8572V14.8107C14.2021 14.2736 14.517 13.7724 15.0267 13.5158C15.2358 13.4111 15.744 13.3124 15.9905 13.2646C16.0728 13.2486 16.1259 13.2383 16.129 13.2353C16.8556 13.1303 17.9704 13.0611 19.1942 13.0611C20.4788 13.0611 21.6419 13.1303 22.3574 13.2592C22.3686 13.2592 23.0233 13.3869 23.2415 13.4692ZM7.96924 13.1222C7.42241 13.1222 6.97974 13.5483 6.97974 14.0746L6.70695 18.6753C6.70695 19.346 7.27238 19.889 7.96924 19.889C8.66611 19.889 9.2303 19.346 9.2303 18.6753L8.95875 14.0746C8.95875 13.5483 8.51608 13.1222 7.96924 13.1222Z" fill="#551FFF"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="text-muted">Requests</h6>
                                                    <h5 className="mb-0">25</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-4" style={{backgroundColor: "#EAF9FF", borderRadius: 11.26}}>
                                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3233 7.32618C18.3233 10.2773 15.8283 12.6436 12.7142 12.6436C9.60126 12.6436 7.10517 10.2773 7.10517 7.32618C7.10517 4.37507 9.60126 2.00977 12.7142 2.00977C15.8283 2.00977 18.3233 4.37507 18.3233 7.32618ZM12.7142 22.1054C8.11844 22.1054 4.2381 21.3971 4.2381 18.664C4.2381 15.9299 8.14282 15.2467 12.7142 15.2467C17.3111 15.2467 21.1904 15.9551 21.1904 18.6881C21.1904 21.4222 17.2856 22.1054 12.7142 22.1054Z" fill="#00B7FE"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h6 className="text-muted">Users</h6>
                                                    <h5 className="mb-0">3</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        <th>Phone Number</th>
                                        <th>Status</th>
                                        <th>Role</th>
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
                        {/* Add Button */}
                        <button className="btn btn-main px-3 py-2 mt-3" onClick={() => setShowAddModal(true)}>New User</button>
                    </div>
                </div>
            </main>
            <AddUserModal show={showAddModal} onHide={() => setShowAddModal(false)} hide={() => setShowAddModal(false)}/>
        </div>
    );
}

export default Audience
