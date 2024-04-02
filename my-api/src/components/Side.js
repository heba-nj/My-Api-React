import { Fragment } from "react";
import { Link } from "react-router-dom";

function Side() {
    return (
        <Fragment>
            <ul className="list-unstyled ull">
                <li>
                    <Link to={"/products"}>Get All Products</Link>
                </li>
                <li>
                    <Link to="/categories">Get All Categories</Link>
                </li>
            </ul>
        </Fragment>
    )
}
export default Side;