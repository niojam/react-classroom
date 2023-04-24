import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllProductsView from "../views/AllProductsView";
import UpdateProductView from "../views/UpdateProductView";

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
                path: "/product/:id/edit",
                element: <UpdateProductView/>,
            },
        ],
    },

]);


export default router;