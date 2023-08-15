import React, { useEffect, useState } from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import "./App.css"

import Header from "./componenet/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Container } from "@mui/material";

const App = () =>{
    return(
        <Router>
        <Header />
        <Container>
            <Routes>
                <Route path="/" element=<Home/> />
                <Route path="/product/:id" element=<Products/> />
            </Routes>
        </Container>
        </Router>
    )
}

export default App
