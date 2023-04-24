import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import ProductList from "../containers/products/ProductList";
import {getAllProducts} from "../clients/classroomProductClient";

function AllProductsView() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data);
            console.log("Promise done")
        }).catch((err) => {
            console.log("wwent wrong")
        });

        console.log("useEffect executed")
    },[])

    return (
        <Container>
            <ProductList products={products}></ProductList>
        </Container>
    );
}

export default AllProductsView;
