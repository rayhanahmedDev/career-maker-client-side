import { useEffect, useState } from "react";
import ServiceCard from "../../Component/ServiceCard";


const Services = () => {

    const [dataService, setDataService] = useState([])
    console.log(dataService);
    useEffect(() => {
        fetch('http://localhost:5000/userService')
            .then(res => res.json())
            .then(data => {
                setDataService(data);
            })
    }, [])

    return (
        <div>
            <div>
                {
                    dataService.map(data => <ServiceCard
                        key={data._id}
                        data={data}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;