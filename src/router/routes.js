import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllProductsView from "../views/AllProductsView";
import EditProductView from "../views/EditProductView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/test",
                element: <div>Hello world!</div>,
            },
            {
                path: "/products",
                element: <AllProductsView/>,
            },
            {
                path: "/product/:productId/edit",
                element: <EditProductView/>,
            },
        ],
    },

]);


export default router;