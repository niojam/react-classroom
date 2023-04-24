import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import ProductList from "../containers/products/ProductList";
import {getAllProducts} from "../clients/classRoomClient";

function AllProductsView() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetch = async () => {
            setProducts(await getAllProducts());
        }
        fetch();
    }, [])

    console.log("test")
    return (
        <Container>
            <ProductList products={products}></ProductList>
        </Container>
    );
}

export default AllProductsView;
