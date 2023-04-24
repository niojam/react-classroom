import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

function ProductCard({product}) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
