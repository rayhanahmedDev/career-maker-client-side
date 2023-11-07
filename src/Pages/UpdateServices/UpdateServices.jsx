import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateServices = () => {
    const {user} = useContext(AuthContext)

    const serviceData = useLoaderData()
    

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const serviceArea = form.serviceArea.value
        const serviceName = form.serviceName.value
        const name = form.name.value
        const price = form.price.value
        const description = form.description.value
        const yourEmail = form.yourEmail.value
        const photo = form.photo.value

        const services = {
            serviceArea,
            serviceName,
            name,
            price,
            description,
            yourEmail,
            photo
        }
        console.log(services);

        fetch(`http://localhost:5000/userService/${serviceData._id}`,{
            method:"PUT",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success',
                    text: 'Service Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
        })
    }

    return (
        <div>
            <div className="border pb-6 mt-6 max-w-7xl mx-auto md:px-36 px-8 py-8">
                <h2 className="text-4xl pt-8 font-bold text-center mb-12">Update Services</h2>
                <form onSubmit={handleUpdate}>
                    {/* form add coffee row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={serviceData.serviceArea} name="serviceArea" placeholder="Service Area" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">
                               <input type="text" defaultValue={serviceData.serviceName} name="serviceName" placeholder="Service Name" className="input input-bordered w-full" />
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
                                {user?. email ? <input name='name' value={user.displayName} readOnly className="input input-bordered w-full" /> : ""}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={serviceData.price} name="price" placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="text" defaultValue={serviceData.description} name="description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                            {user?. email ? <input type="text" name="yourEmail" value={user.email} readOnly className="input input-bordered w-full" /> : ""}
                            </label>
                        </div>

                    </div>
                    {/* photo form */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={serviceData.photo} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update  Services" className="btn btn-block mt-8 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateServices;