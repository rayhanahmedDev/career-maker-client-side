import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber/Navber";


const Root = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;