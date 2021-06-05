import Categories from './components/Categories';
import BestPicks from './components/BestPicks';
import TopSellers from './components/TopSellers';
import Countdown from './components/Countdown';
import Reviews from './components/Reviews';
import Brands from './components/Brands';

import Features from '../../components/Features';

export default function Home() {
    return (
        <>
            {/* <!-- CATEGORIES --> */}
            <Categories />

            {/* <!-- FEATURES --> */}
            <Features color="home" />

            {/* <!-- BEST PICKS --> */}
            <BestPicks />

            {/* <!-- TOP SELLERS --> */}
            <TopSellers />

            {/* <!-- COUNTDOWN --> */}
            <Countdown />

            {/* <!-- REVIEWS --> */}
            <Reviews />

            {/* <!-- BRANDS --> */}
            <Brands />

        </>
    )
}
