import HeaderNav from "./containers/navbar/HeaderNav";
import {RouterProvider, Outlet} from "react-router-dom";
import React from "react";

function App() {

    return (
        <div>
            <HeaderNav />
            <Outlet />
        </div>
    );
}

export default App;
