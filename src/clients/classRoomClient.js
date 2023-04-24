import axios from "axios";

export const getAllProducts = async () => {
    const axiosResponse = await axios.get('product/all');
    return axiosResponse.data;
}