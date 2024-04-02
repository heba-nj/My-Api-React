import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
    const api_url = "https://fakestoreapi.com/products";
    const [product,setProduct] = useState([]);
    useEffect(()=> {
        fetch(`${api_url}/${productID}`).then((res) => res.json())
        .then((data)=> setProduct(data));
    },[])
    let {productID} = useParams();
    return (
        <Fragment>
            <h4>{product.id}</h4>
            <h4 className="text-warning fw-bold">{product.title}</h4>
            <h4 className="fs-5">{product.description}</h4>
            <img src={product.image} alt={product.title} className=" w-25" />
        </Fragment>
    )
}
export default View;