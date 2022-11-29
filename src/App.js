import logo from "./logo.png"
import "./App.css"
import Loading from "./Components/Loading/Loading"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Hero } from "./Components/Hero2/Hero"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import { ImageView } from "./Components/ImageView/ImageView"
import { Product } from "./Components/Product/Product"
import { Products } from "./Components/Products/Products"
import { FilterBox } from "./Components/FilterBox/FilterBox"
import Parallax from "react-rellax"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    const [img, setImg] = useState(1)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(!load)
        }, 8000)
    }, [])
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 70,
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Sidebar setimg={setImg} />
                                <ImageView imgno={img} />
                                <Parallax>
                                    <Hero />
                                </Parallax>
                            </>
                        }
                    />
                    <Route
                        path="/load"
                        element={
                            <AnimatePresence>
                                {load && <Loading />}
                            </AnimatePresence>
                        }
                    />

                    <Route path="/products" element={<Products />} />

                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
