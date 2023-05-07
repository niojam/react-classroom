import axios from "axios";

export const getAllProducts = () => {
    return axios.get('/product/all')
};

export const getProductById = (id) => {
    return axios.get(`/product/${id}`)
};

export const updateProduct = (product) => {
    return axios.put('/product', product)
}

