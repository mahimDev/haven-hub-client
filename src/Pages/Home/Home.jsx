import { Helmet } from 'react-helmet';
import Banner from '../../Shared/Banner/Banner';
import Featured from '../../Shared/Featured/Featured';
import Map from '../../Shared/Map/Map';
import Reviews from '../../Shared/Reviews/Reviews';
import TheBestPlace from '../../Shared/TheBestPlace/TheBestPlace';
import Gallery from '../../Shared/Gallery/Gallery';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title> HavenHub</title>
            </Helmet>
            <header className="max-w-[1440px] mx-auto">
                <Banner></Banner>
            </header>
            <main className="max-w-[1440px] mx-auto">
                <section>
                    <Featured></Featured>
                </section>
                <section>
                    <TheBestPlace></TheBestPlace>
                </section>
                <section>
                    <Gallery></Gallery>
                </section>
                <section>
                    {/* map */}
                    <Map></Map>
                </section>
                <section className='pt-20'>
                    <Reviews></Reviews>
                </section>
            </main>

        </div>
    );
};

export default Home;