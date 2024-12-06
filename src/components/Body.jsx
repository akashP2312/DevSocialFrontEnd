import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navbar"
import Footer from "./Footer";
import axios from "axios";
import { API_DOMAIN_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = async () => {
        try {
            const userData = await axios.get(API_DOMAIN_URL + "/profile/view", { withCredentials: true });
            dispatch(addUser(userData.data));
        } catch {
            navigate("/login")
        }

    }
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Body;