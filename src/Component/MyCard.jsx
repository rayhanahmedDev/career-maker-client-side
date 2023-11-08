

const MyCard = ({ data, handleUpdateOne }) => {

    const { _id, status, serviceArea, serviceName, date, price, userEmail, yourEmail, photo } = data;


    return (
        <div className="my-12">
            <div className="lg:w-9/12 lg:h-[300px] lg:mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700 lg:flex justify-between">
                <div className="lg:w-1/2">
                    <img className="h-[250px] lg:rounded-lg w-full lg:h-[300px]" src={photo} alt="" />
                </div>
                <div className="p-5 lg:w-1/2">
                    <h5 className="mb-2 text-[24px] font-medium">{serviceName}</h5>
                    <p className="mb-3 text-[#A3A3A6]">Date : {date}</p>
                    <div className="flex-wrap justify-between">
                        <p className="mb-3 text-[#A3A3A6]">Price : ${price}</p>
                        <p className="mb-3 text-[#A3A3A6]">ServiceArea : {serviceArea}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="mt-2 lg:mt-0">
                            <p className="font-medium">User Email : {userEmail}</p>
                            <p className="font-medium">Your Email : {yourEmail}</p>
                        </div>
                        {/* {status === 'pending' ? <span className="font-bold text-primary">Complete</span> : <button onClick={() => handleUpdateOne(_id)} className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>Pending</button>} */}
                        <div>
                            {status === 'pending' ? <span>Completed</span> : <select onChange={() => handleUpdateOne(_id)} name="cars" id="cars">
                                <option value="volvo">Pending</option>
                                <option value="saab">In Progress</option>
                                <option value="opel">Completed</option>
                            </select> }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyCard;