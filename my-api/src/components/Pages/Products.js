import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(api_url).then((res) => res.json()).then((data) => setProducts(data))
    }, [])

    return (
        <div>
            <h2>Products Page</h2>
            <Link to={"/products/productt"} className="btn btn-info mt-2">Add New Product</Link>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm mx-1">Delete</button>
                                    <Link to={`products/${product.id}`} className="btn btn-success btn-sm mx-1">View</Link>
                                    <button className="btn btn-warning btn-sm mx-1">Edit</button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
        </div >
    )
}
export default Products;