

const Service = ({ ser }) => {
    const { ServiceImage, ServiceName, ServiceDescription, ServicePrice, } = ser
    return (
        <div>
            <div className={`lg:max-w-2xl lg:h-[250px] lg:mx-auto w-full border border-gray-200 rounded-lg shadow dark:border-gray-700 flex `}>
                <div className="w-1/2">
                    <img className=" h-full w-64 lg:w-96 lg:h-[250px]" src={ServiceImage} alt="" />
                </div>
                <div className="p-5 w-1/2">
                    <h5 className="mb-2 text-[24px] font-medium">{ServiceName}</h5>
                    <p className="mb-3">{ServiceDescription}</p>
                    <p>Price : ${ServicePrice}</p>
                    <div className="flex flex-wrap lg:justify-between items-center">
                        <div className="flex mt-2 lg:mt-0 justify-center items-center">
                            <img className="w-16 rounded-full" src='https://i.ibb.co/TL29bdh/user2.jpg' alt="" />
                            <p className="ml-2 font-medium">City Walkers</p>
                        </div>
                        <button className='btn lg:my-5 mt-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;