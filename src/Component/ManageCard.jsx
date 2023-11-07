import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ManageCard = ({ data }) => {

    const { user } = useContext(AuthContext)
    const { serviceArea, serviceName, price, description, yourEmail, photo } = data

    return (
        <div>
            <div className="lg:w-9/12 my-12 lg:h-[300px] lg:mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700 lg:flex justify-between">
                <div className="lg:w-1/2">
                    <img className="h-[250px] lg:rounded-lg w-full lg:h-[300px]" src={photo} alt="" />
                </div>
                <div className="p-5 lg:w-1/2">
                    <h5 className="mb-2 text-[24px] font-medium">{serviceName}</h5>
                    <p className="mb-3 text-[#A3A3A6]">{description}</p>
                    <div className="flex-wrap justify-between">
                        <p className="mb-3 text-[#A3A3A6]">Price : ${price}</p>
                        <p className="mb-3 text-[#A3A3A6]">Service Area : {serviceArea}</p>
                        <p className="mb-3 text-[#A3A3A6]">Email : {yourEmail}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        {user?.email ? <div className="flex mt-2 lg:mt-0 justify-center items-center">
                            <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                            <p className="ml-4 font-medium">{user.displayName}</p>
                        </div> : ""}
                        <div className="flex flex-wrap">
                        <button className='btn lg:my-5 mr-4 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>Edit</button>
                        <button className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageCard;