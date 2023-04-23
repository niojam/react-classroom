import React from "react";
import ProductCard from "../../componets/product/ProductCard";

function ProductList({products}) {

    return products.map((product) => {
        return (
            <ProductCard product={product}></ProductCard>
        )
    });
}

export default ProductList;
