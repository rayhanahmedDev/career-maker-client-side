import { useState } from "react";
import ManageCard from "../../Component/ManageCard";
import { useLoaderData } from "react-router-dom";


const ManageServices = () => {

    const dataLoader = useLoaderData()
    const [deleted, setDeleted] = useState(dataLoader)

    return (
        <div>
            {
                deleted.map(data => <ManageCard
                    key={data._id}
                    data={data}
                    deleted={deleted}
                    setDeleted={setDeleted}
                ></ManageCard>)
            }
        </div>
    );
};

export default ManageServices;