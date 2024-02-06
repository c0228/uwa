import React from "react";
import Home from "@Pages/Home/index.js";
import BrowseMatrimony from "@Pages/BrowseMatrimony/index.js";
import MatchCalculator from "@Pages/MatchCalculator/index.js";
import Authentication from "@Pages/Authentication/index.js";

export const Routes = [
    { path:"/", component:<Home /> },
    { path:"Home", component:<Home /> },
    { path:"BrowseMatrimony", component:<BrowseMatrimony /> },
    { path:"MatchCalculator", component:<MatchCalculator /> }, 
    { path:"Authentication", component:<Authentication /> },
];