import React from "react";
import ProductCard from "../../componets/product/ProductCard";

function ProductList({products}) {

    return products.map((product) => {
        return (
            <div className="mt-5" key={`product-card-${product.id}`}>
                <ProductCard product={product}></ProductCard>
            </div>
        )
    });
}

export default ProductList;
