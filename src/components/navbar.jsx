import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_DOMAIN_URL } from "../utils/constants";
import { deleteUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const userData = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post(API_DOMAIN_URL + "/logout", {}, { withCredentials: true });
        dispatch(deleteUser());
        navigate("/login")
    }

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to={"/feed"} className="btn btn-ghost text-xl">Dev Social</Link>
            </div>
            {userData && Object.entries(userData).length > 0 &&
                <div className="flex-none gap-2">
                    <div>
                        Welcome {userData.firstName}
                    </div>

                    <div className="dropdown dropdown-end mx-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to={"/profile"} className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>

                </div>
            }
        </div>
    )
}

export default NavBar;