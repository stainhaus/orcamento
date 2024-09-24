import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Header } from '../header/header';
import Login from "../../pages/login/Login";
import { Dashboard } from "../../pages/dashboard/Dashboard";
import Sobre from "../../pages/sobre/Sobre";

export const Routers = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}