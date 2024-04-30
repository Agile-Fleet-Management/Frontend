import "../css/navbar.css";
import ifran from "../Assets/img/ifran.png";
import logo from "../Assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                <img src={logo} className="img-fluid" width={64} alt="Dashboard" />
                <img src={ifran} className="img-fluid" width={140} alt="Dashboard" />
            </div>
        </nav>
    );
}

export default Navbar;
