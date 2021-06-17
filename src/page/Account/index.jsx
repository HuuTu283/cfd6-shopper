import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom"

import Orders from './components/Orders';
import OrderDetails from './components/OrderDetails';
import Wishlist from './components/Wishlist';
import Info from './components/Info';

import Address from "./components/Address";
import AddressEdit from './components/AddressEdit';

import PaymentMethods from './components/PaymentMethods';
import PaymentEdit from './components/PaymentEdit';
import { useDispatch } from 'react-redux';
import { logoutAction } from "../../redux/actions/authAction";
import { RouteWithSubRoutes } from "core/routerConfig";




export default function AccountPage({ routes }) {
    let { path } = useRouteMatch()
    let dispatch = useDispatch()

    function logOut(e) {
        e.preventDefault();
        dispatch(logoutAction())
    }


    return (
        <>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink to={`${path}/don-hang-da-dat`} className="list-group-item list-group-item-action dropright-toggle ">
                                        Orders
                                    </NavLink>
                                    <NavLink to={`${path}/yeu-thich`} className="list-group-item list-group-item-action dropright-toggle ">
                                        Wishlist
                                    </NavLink>
                                    <NavLink exact to={`${path}`} className="list-group-item list-group-item-action dropright-toggle">
                                        Personal Info
                                    </NavLink>
                                    <NavLink to={`${path}/dia-chi`} className="list-group-item list-group-item-action dropright-toggle ">
                                        Addresses
                                    </NavLink>
                                    <NavLink to={`${path}/hinh-thuc-thanh-toan`} className="list-group-item list-group-item-action dropright-toggle ">
                                        Payment Methods
                                    </NavLink>
                                    <NavLink onClick={logOut} to={`${path}/dang-xuat`} className="list-group-item list-group-item-action dropright-toggle">
                                        Logout
                                    </NavLink>
                                </div>
                            </nav>
                        </div>


                        <Switch>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}


                            {/* <Route exact path={`${path}/don-hang-da-dat`} component={Orders} />
                            <Route path={`${path}/don-hang-da-dat/chi-tiet`} component={OrderDetails} />

                            <Route path={`${path}/yeu-thich`} component={Wishlist} />
                            <Route exact path={`${path}`} component={Info} />

                            <Route exact path={`${path}/dia-chi`} component={Address} />
                            <Route path={`${path}/dia-chi/chinh-sua`} component={AddressEdit} />

                            <Route exact path={`${path}/hinh-thuc-thanh-toan`} component={PaymentMethods} />
                            <Route path={`${path}/hinh-thuc-thanh-toan/chinh-sua`} component={PaymentEdit} /> */}
                        </Switch>
                    </div>
                </div>
            </section>
        </>
    )
}
