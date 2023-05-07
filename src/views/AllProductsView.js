import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import ProductList from "../containers/products/ProductList";
import {getAllProducts} from "../clients/classroomProductClient";

function AllProductsView() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productResponse = await getAllProducts();
            setProducts(productResponse.data)
        }

        console.log("useeffect")
        fetchData();
    }, [])

    return (
        <Container>
            <ProductList products={products}></ProductList>
        </Container>
    );
}

export default AllProductsView;
