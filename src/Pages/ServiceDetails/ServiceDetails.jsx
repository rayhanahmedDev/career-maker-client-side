import { useContext } from "react";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const ServiceDetails = () => {

    const { user } = useContext(AuthContext)

    const data = useLoaderData()
    return (
        <div className="lg:h-[70vh] flex justify-center items-center">
            <div className="lg:w-9/12 lg:h-[300px] lg:mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700 lg:flex justify-between">
                <div className="lg:w-1/2">
                    <img className="h-[250px] lg:rounded-lg w-full lg:h-[300px]" src={data.ServiceImage} alt="" />
                </div>
                <div className="p-5 lg:w-1/2">
                    <h5 className="mb-2 text-[24px] font-medium">{data.ServiceName}</h5>
                    <p className="mb-3 text-[#A3A3A6]">{data.ServiceDescription}</p>
                    <div className="flex-wrap justify-between">
                        <p className="mb-3 text-[#A3A3A6]">Price : ${data.ServicePrice}</p>
                        <p className="mb-3 text-[#A3A3A6]">ServiceArea : {data.ServiceArea}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        {user?.email ? <div className="flex mt-2 lg:mt-0 justify-center items-center">
                            <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                            <p className="ml-4 font-medium">{user.displayName}</p>
                        </div> : ""}
                        {/* <button className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>book now</button> */}
                        {/* modal section start*/}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>book now</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                {/* form start */}
                                <form >
                                    {/* form add coffee row */}
                                    <div className="md:flex gap-4">
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Service Area</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Service Name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="serviceName"
                                                value="serviceName" placeholder="Service Name" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form supplier and taste row */}
                                    <div className="md:flex gap-4">
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <label className="input-group ">
                                                {user?.email ? <input name='name' value={user.displayName} readOnly className="input input-bordered w-full" /> : ""}
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form category and details row */}
                                    <div className="md:flex gap-4">
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 w-full">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <label className="input-group">
                                                {user?.email ? <input type="text" name="yourEmail" value={user.email} readOnly className="input input-bordered w-full" /> : ""}
                                            </label>
                                        </div>

                                    </div>
                                    {/* photo form */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <input type="submit" value="Add to Services" className="btn btn-block mt-8 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white" />
                                </form>
                                {/* form end */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        {/* modal section end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;