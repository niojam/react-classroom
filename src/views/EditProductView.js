import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {getProductById, updateProduct} from "../clients/classroomProductClient";
import EditProductForm from "../containers/editproduct/EditProductForm";
import data from "bootstrap/js/src/dom/data";


function EditProductView() {

    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProductData = async () => {
            setProduct((await getProductById(productId)).data)
        }
        fetchProductData();
    }, [])


    const handleUpdateProduct = async (product) => {
        console.log("handleUpdateProduct")
        const res = await updateProduct(product);
        setProduct(res.data);
    }

    console.log(product);

    return (
        <Container>
            <div className="mb-5">test data</div>
            {product && (
                <EditProductForm updateProduct={handleUpdateProduct} product={product} />
            )}
        </Container>
    );
}

export default EditProductView;
