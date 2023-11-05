import img from '../../../assets/slider1.jpg'
import img2 from '../../../assets/slider2.jpg'
import img3 from '../../../assets/slider3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className=' text-white space-y-7 lg:w-1/2'>
                    <h2 className='text-5xl font-bold'>Free Tour Community</h2>
                    <p>Local tours and guide services are tourism-related businesses that provide guided experiences and tours to visitors in specific locations or regions</p>
                    <div className=''>
                        <button className='btn bg-[#FF3811] text-white border-[#FF3811]'> Discover More</button>
                    </div>
                </div>
                </div>
                <div className="absolute flex bottom-8 right-5">
                    <a href="#slide3" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className=' text-white space-y-7 lg:w-1/2'>
                    <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn bg-[#FF3811] text-white border-[#FF3811]'> Discover More</button>
                        <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                    </div>
                </div>
                </div>
                <div className="absolute flex bottom-8 right-5">
                    <a href="#slide1" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-white bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <div className=' text-white space-y-7 lg:w-1/2'>
                    <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn bg-[#FF3811] text-white border-[#FF3811]'> Discover More</button>
                        <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                    </div>
                </div>
                </div>
                <div className="absolute flex bottom-8 right-5">
                    <a href="#slide2" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle  text-white bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;