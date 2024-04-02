import Side from "./Side";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Categories";
import Productt from "./Pages/Productt";
import View from "./Pages/View";
function SideBar() {
    return (
        <div className="row">
            <div className="col-2 cols">
                <Side/>
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/productt" element= {<Productt/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="products/products/:productID" element={<View/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default SideBar;