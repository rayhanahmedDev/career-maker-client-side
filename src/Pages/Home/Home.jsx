import Banner from "./HomeComponent/Banner";
import Faq from "./HomeComponent/Faq";
import Footer from "./HomeComponent/Footer";
import PopularService from "./HomeComponent/PopularService";
import PriceList from "./HomeComponent/PriceList";
import Testimonials from "./HomeComponent/Testimonials";


const Home = () => {
    return (
        <div>
           <div>
            <Banner></Banner>
           </div>
           <div>
            <PopularService></PopularService>
           </div>
           <div>
            <Testimonials></Testimonials>
           </div>
           <div>
            <PriceList></PriceList>
           </div>
           <div>
            <Faq></Faq>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;