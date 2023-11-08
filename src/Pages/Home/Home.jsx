import Lottie from "lottie-react";
import Banner from "./HomeComponent/Banner";
import Faq from "./HomeComponent/Faq";
import Footer from "./HomeComponent/Footer";
import PopularService from "./HomeComponent/PopularService";
import PriceList from "./HomeComponent/PriceList";
import Testimonials from "./HomeComponent/Testimonials";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import lottiee from '../../assets/loading.json'

const Home = () => {

    const {loading} = useContext(AuthContext)
    if(loading) {
        return <Lottie animationData={lottiee}></Lottie>
    }
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