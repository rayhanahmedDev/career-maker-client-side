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
        <div className="my-12 border">
            <h2 className="text-center text-4xl font-semibold">Popular Services</h2>
            <p className="text-center my-5">Find the best free tour and get super funky local experience with all the sauce you can take. <br /> Cuddle with bees and sleep with the wolves. Ever heard about Zanudka?</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    services.slice(0, 4).map(ser => <Service key={ser._id} ser={ser}></Service>)
                }
            </div>
        </div>
    );
};

export default PopularService;