
import { useLoaderData } from "react-router-dom";
import MyCard from "../../Component/MyCard";


const MySchedules = () => {

    const bookingData = useLoaderData([])

    return (
        <div>
            {
                bookingData.map(data => <MyCard 
                    key={data._id}
                    data={data}
                ></MyCard>)
            }
        </div>
    );
};

export default MySchedules;