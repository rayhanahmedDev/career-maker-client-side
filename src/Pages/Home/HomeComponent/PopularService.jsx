import { useEffect, useState } from "react";
import Service from "../../../Component/Service";


const PopularService = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="my-12">
            <h2 className="text-center text-4xl font-semibold">Popular Services</h2>
            <p className="text-center my-5">Find the best free tour and get super funky local experience with all the sauce you can take. <br /> Cuddle with bees and sleep with the wolves. Ever heard about Zanudka?</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                {
                    services.slice(0, 4).map(ser => <Service key={ser._id} ser={ser}></Service>)
                }
            </div>
           <div className="text-center my-12">
           <button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">Show All</button>
           </div>
        </div>
    );
};

export default PopularService;