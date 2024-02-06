import React from "react";
import Authentication from "./../pages/Authentication/index.js";
import NewsFeed from "./../pages/NewsFeed/index.js";

export const Routes = [
    { path:"/", component:<Authentication /> },
    { path:"newsfeed", component:<NewsFeed /> },
    { path:"home", component:(<div>Test</div>) }
];