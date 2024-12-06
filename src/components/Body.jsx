import { Outlet } from "react-router-dom";
import NavBar from "./navbar"
import Footer from "./Footer";

const Body = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Body;