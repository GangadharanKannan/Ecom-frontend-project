import ReactDOM from "react-dom/client"
import "./style.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Card from "./Card/Card"
import HeroSection from "./HeroSection/HeroSection"
import ProductDetails from "./ProductDetails/ProductDetails"
import Products from "./Products/Products"

const AppLayout = ()=>{
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
const router = createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<HeroSection />
        },
        {
            path:"/product",
            element:<Products />
        },
        {
            path:"/product/:id",
            element:<ProductDetails />
        },
        {
            path:"/cart/:id",
            element:<Card />
        }
    ]
}])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)