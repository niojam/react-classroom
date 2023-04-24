import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function ProductCard({product}) {

    const navigate = useNavigate();

    const routToEdit = (id) => {
        console.log("sdde");
        console.log(id);
        navigate(`/product/${id}/edit`)
    }

    return (
        <div className="mt-5">
            <Card>
                <Card.Header as="h5">{product.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{product.manufacturer}</Card.Title>
                    <Card.Text>
                        beautiful text goes here
                    </Card.Text>
                    <Button onClick={() => routToEdit(product.id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
