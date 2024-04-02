import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="app">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand logo" to={"/"}>Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                        <Link className="nav-link mx-3 home" aria-current="page" to={"/"}>Home</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
