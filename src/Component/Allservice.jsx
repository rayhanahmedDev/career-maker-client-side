import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const Allservice = ({ data }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const { _id, ServiceImage, ServiceName, ServiceDescription, ServicePrice, ServiceArea } = data
    return (
        <div>
            <div>
                <div className="lg:w-9/12 lg:h-[300px] lg:mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700 lg:flex justify-between">
                    <div className="lg:w-1/2">
                        <img className="h-[250px] lg:rounded-lg w-full lg:h-[300px]" src={ServiceImage} alt="" />
                    </div>
                    <div className="p-5 lg:w-1/2">
                        <h5 className="mb-2 text-[24px] font-medium">{ServiceName}</h5>
                        <p className="mb-3 text-[#A3A3A6]">{ServiceDescription}</p>
                        <div className="flex-wrap justify-between">
                            <p className="mb-3 text-[#A3A3A6]">Price : ${ServicePrice}</p>
                            <p className="mb-3 text-[#A3A3A6]">ServiceArea : {ServiceArea}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            {user?.email ? <div className="flex mt-2 lg:mt-0 justify-center items-center">
                                <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                                <p className="ml-4 font-medium">{user.displayName}</p>
                            </div> : ""}
                            <Link to={`/details/${_id}`}><button className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allservice;