import Banner from '../../Shared/Banner/Banner';
import Featured from '../../Shared/Featured/Featured';

const Home = () => {

    return (
        <div>
            <header className="max-w-[1440px] mx-auto">
                <Banner></Banner>
            </header>
            <main className="max-w-[1440px] mx-auto">
                <Featured></Featured>
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    );
};

export default Home;