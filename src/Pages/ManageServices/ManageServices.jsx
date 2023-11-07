import { useEffect, useState } from "react";
import ManageCard from "../../Component/ManageCard";


const ManageServices = () => {

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
            {
                dataService.map(data => <ManageCard
                    key={data._id}
                    data={data}
                ></ManageCard>)
            }
        </div>
    );
};

export default ManageServices;