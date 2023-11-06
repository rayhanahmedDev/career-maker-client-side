import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import './Navber.css'


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
        <li><NavLink className='mr-4' to='/services'>Services</NavLink></li>
        {user?.email ? <li><button className='mr-4' onClick={handleLogOut}>LogOut</button></li> : <li><NavLink className='mr-4' to='/login'>Login</NavLink></li>}
    </>

    const link = <>
    <li><NavLink className='mb-2' to='/my-services'>My-services</NavLink></li>
    <li><NavLink className='mb-2' to='/add-services'>Add-services</NavLink></li>
    <li><NavLink className='mb-2' to='/my-schedules'>My-schedules</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        { user?. email ? <details className="dropdown mt-2 lg:mt-0">
                        <summary className="btn pb-4"><li>Dashboard</li> </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </details> : ""}
                    </ul>
                </div>
               <h2><span className="text-2xl font-semibold text-[#FF3300]">FREE TOUR</span><span className="text-2xl font-normal"> <br />COMMUNITY</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu-horizontal py-5 px-1">
                    {links}
                   { user?. email ? <details className="dropdown">
                        <summary className="btn pb-4"><li>Dashboard</li> </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </details> : ""}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm my-2 bg-[#FF3811] text-white">{user.displayName}</button>
                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm bg-[#FF3811] text-white">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'><button onClick={handleLogOut} className="btn btn-outline btn-secondary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;