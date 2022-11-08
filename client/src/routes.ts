// pages

import {FC} from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Warehouses from "./pages/Warehouses";

// other


// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'warehouses-route',
        title: 'Warehouses',
        path: '/warehouses',
        enabled: true,
        component: Warehouses
    }
]