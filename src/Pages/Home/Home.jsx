import Banner from '../../Shared/Banner/Banner';
import Featured from '../../Shared/Featured/Featured';
import Map from '../../Shared/Map/Map';
import Reviews from '../../Shared/Reviews/Reviews';
import TheBestPlace from '../../Shared/TheBestPlace/TheBestPlace';

const Home = () => {

    return (
        <div>
            <header className="max-w-[1440px] mx-auto">
                <Banner></Banner>
            </header>
            <main className="max-w-[1440px] mx-auto">
                <Featured></Featured>
                <Map></Map>
                <TheBestPlace></TheBestPlace>
                <Reviews></Reviews>
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    );
};

export default Home;