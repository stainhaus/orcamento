import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Header } from '../header/header';
import Login from "../../pages/Login/Login";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Sobre } from "../../pages/Sobre/Sobre";

export const Routers = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Sobre" element={<Sobre/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}