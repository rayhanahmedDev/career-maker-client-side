

const Testimonials = () => {
    return (
        <div className="bg-[#F5F5F6] lg:h-[70vh] pb-4">
            <div className="text-center my-12">
                <h2 className='text-5xl pt-16 font-bold text-center'>Testimonials</h2>
                <p className='text-center text-[12px] font-bold mt-4 text-[#A3A3A6]'>HAPPY CLIENTS ABOUT US</p>
            </div>
            {/* testimonials 1 */}
            <div className="grid grid-cols-1 w-9/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                <div className=" p-6 border border-gray-200 rounded-3xl shadow bg-white py-8" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Look no further! You are in the right place to plan your celebration.</h5>
                    <div className='avatar flex justify-center mt-8 items-center gap-4'>
                        <div className="w-14 rounded-full ">
                            <img src='https://i.ibb.co/8xkynzh/user3.jpg' />
                        </div>
                        <p className="mb-3 font-normal text-[#A3A3A6]">LINDA MOVRIZZA</p>
                    </div>
                </div>
                {/* testimonials 2 */}
                <div className=" p-6 border border-gray-200 rounded-3xl shadow bg-white py-8" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">I invited these event planner to arrange a bachelor party for my best friend!</h5>
                    <div className='avatar flex justify-center mt-8 items-center gap-4'>
                        <div className="w-14 rounded-full ">
                            <img src='https://i.ibb.co/tpLpQtd/user2.jpg' />

                        </div>
                        <p className="mb-3 font-normal text-[#A3A3A6]">JOHN SNOW</p>
                    </div>
                </div>
                {/* testimonials 3 */}
                <div className=" p-6 border border-gray-200 rounded-3xl shadow bg-white py-8" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Perfect decoration and perfect buffet for my little sisters birthday party!</h5>
                    <div className='avatar flex justify-center mt-8 items-center gap-4'>
                        <div className="w-14 rounded-full ">
                            <img src='https://i.ibb.co/LkCpYbv/user1.jpg' />
                        </div>
                        <p className="mb-3 font-normal text-[#A3A3A6]">JANE SANDERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;