import Footer from "./Footer";
import Header from "./Header";

import Top from '../../components/Top';
import { RouteWithSubRoutes } from "core/routerConfig";
import { Switch } from 'react-router-dom';

export default function MainLayout({ children, routes }) {
    return (
        <>
            <Header />
            <Top />
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            <Footer />
        </>
    )
}