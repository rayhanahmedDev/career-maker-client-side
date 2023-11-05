import Banner from "./HomeComponent/Banner";
import PopularService from "./HomeComponent/PopularService";


const Home = () => {
    return (
        <div>
           <div>
            <Banner></Banner>
           </div>
           <div>
            <PopularService></PopularService>
           </div>
        </div>
    );
};

export default Home;