import Footer from "./Footer";
import Header from "./Header";

import Top from '../../components/Top';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Top />
            {children}
            <Footer />
        </>
    )
}