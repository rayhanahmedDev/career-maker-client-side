
import { useLoaderData } from "react-router-dom";
import MyCard from "../../Component/MyCard";
import { useState } from "react";
import Swal from "sweetalert2";


const MySchedules = () => {

    const bookingData = useLoaderData()
    const [booking, setBooking] = useState(bookingData)
    console.log(booking);

    const handleUpdateOne = id => {
        
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status : "pending"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully Updated Data',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                // update status
                const remaining = booking.filter(book => book._id !== id)
                const update = booking.find(book => book._id === id)
                update.status = "pending"
                const newUpdate = [update, ...remaining]
                setBooking(newUpdate)
            }
        })
    }

    return (
        <div>
            {
                booking.map(data => <MyCard 
                    key={data._id}
                    data={data}
                    handleUpdateOne={handleUpdateOne}
                ></MyCard>)
            }
        </div>
    );
};

export default MySchedules;