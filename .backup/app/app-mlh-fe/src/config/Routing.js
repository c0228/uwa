import React from "react";
import Home from "@Pages/Home/index.js";
import Menu from "@Pages/Menu/index.js";

export const Routes = [
    { path:"/", component:<Home /> },
    { path:"home", component:<Home /> },
    { path:"menu", component:<Menu /> }
];