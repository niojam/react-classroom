import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function ProductCard({product}) {

    const navigate = useNavigate();

    const redirectToEditPage = (productId) => {
        navigate(`/product/${productId}/edit`)
    }


    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button onClick={() => redirectToEditPage(product.id)} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
