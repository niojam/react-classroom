import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProductList from "../containers/products/ProductList";

function AllProductsView() {

    const products = [
        {
            name: "Galaxy 2",
            manufacturer: "samsung",
        },
        {
            name: "Galaxy 2",
            manufacturer: "samsung",
        },
        {
            name: "Ihone 5",
            manufacturer: "Apple",
        },
        {
            name: "Iphone 6",
            manufacturer: "Apple",
        },
        {
            name: "Hero",
            manufacturer: "Htc",
        },
        {
            name: "Fold",
            manufacturer: "LG",
        },
    ];


    return (
        <Container>
            <ProductList products={products}></ProductList>
        </Container>
    );
}

export default AllProductsView;
