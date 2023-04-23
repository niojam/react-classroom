import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllProductsView from "../views/AllProductsView";

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
        ],
    },

]);


export default router;