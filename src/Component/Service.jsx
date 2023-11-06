import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const Service = ({ ser }) => {

    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const {_id, ServiceImage, ServiceName, ServiceDescription, ServicePrice, } = ser
    return (
        <div>
            <div className={`lg:max-w-2xl lg:h-[250px] lg:mx-auto w-full border border-gray-200 rounded-lg shadow dark:border-gray-700 lg:flex `}>
                <div className="lg:w-1/2">
                    <img className=" h-[250px] w-full lg:w-96 lg:h-[250px]" src={ServiceImage} alt="" />
                </div>
                <div className="p-5 lg:w-1/2">
                    <h5 className="mb-2 text-[24px] font-medium">{ServiceName}</h5>
                    <p className="mb-3 text-[#A3A3A6]">{ServiceDescription}</p>
                    <p className="text-[#A3A3A6]">Price : ${ServicePrice}</p>
                    <div className="flex justify-between items-center">
                        { user?. email ? <div className="flex mt-2 lg:mt-0 justify-center items-center">
                            <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                            <p className="ml-4 font-medium">{user.displayName}</p>
                        </div> : ""}
                       <Link to={`/details/${_id}`}> <button className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;