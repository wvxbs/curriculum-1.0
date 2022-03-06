import React from "react"

import Home from './pages/Home' 

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Information from "./pages/home/Information"

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/information" element={<Information />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages