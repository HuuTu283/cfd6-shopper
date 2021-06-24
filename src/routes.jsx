import React from "react";

import MainLayout from './layout/MainLayout';


const Home = React.lazy(() => import("./page/home"));
const AboutPage = React.lazy(() => import('./page/about'));
const ShopPage = React.lazy(() => import("./page/shop"));
const StoreLocator = React.lazy(() => import("./page/storelocator"));
const ShipvReturn = React.lazy(() => import("./page/ship&return"));
const Faq = React.lazy(() => import("./page/faq"));
const ContactPage = React.lazy(() => import("./page/contact"));
const ShoppingCart = React.lazy(() => import("./page/shoppingcart"));
const ProductPage = React.lazy(() => import("./page/product"));
const OrderCompleted = React.lazy(() => import("./page/ordercompleted"));
const CheckoutPage = React.lazy(() => import("./page/checkout"));
const AuthPage = React.lazy(() => import("./page/auth"));
const AccountPage = React.lazy(() => import("./page/Account"));
const Error404 = React.lazy(() => import("./page/404"));
const ComingSoon = React.lazy(() => import("page/comingsoon"));


const Orders = React.lazy(() => import("page/Account/components/Orders"));
const OrderDetails = React.lazy(() => import("page/Account/components/OrderDetails"));
const Wishlist = React.lazy(() => import("page/Account/components/Wishlist"));
const Address = React.lazy(() => import("page/Account/components/Address"));
const AddressEdit = React.lazy(() => import("page/Account/components/AddressEdit"));
const PaymentMethods = React.lazy(() => import("page/Account/components/PaymentMethods"));
const PaymentEdit = React.lazy(() => import("page/Account/components/PaymentEdit"));
const Info = React.lazy(() => import("page/Account/components/Info"));

let routes = [
    {
        path: '/coming-soon',
        component: ComingSoon
    },

    {
        component: MainLayout,
        routes: [
            {
                path: '/tai-khoan',
                component: AccountPage,
                auth: true,
                routes: [
                    {
                        path: '/tai-khoan/don-hang-da-dat',
                        component: Orders,
                    },
                    {
                        path: '/tai-khoan/don-hang-da-dat/chi-tiet',
                        component: OrderDetails,
                    },
                    {
                        path: '/tai-khoan/yeu-thich',
                        component: Wishlist,
                    },
                    {
                        path: '/tai-khoan/dia-chi',
                        component: Address,
                    },
                    {
                        path: '/tai-khoan/dia-chi/chinh-sua',
                        component: AddressEdit,
                    },
                    {
                        path: '/tai-khoan/hinh-thuc-thanh-toan',
                        component: PaymentMethods,
                    },
                    {
                        path: '/tai-khoan/hinh-thuc-thanh-toan/chinh-sua',
                        component: PaymentEdit,
                    },
                    {
                        path: '/tai-khoan',
                        component: Info,
                    },
                ]
            },

            {
                path: '/gioi-thieu',
                component: AboutPage
            },
            {
                path: '/dia-chi',
                component: StoreLocator
            },
            {
                path: '/doi-tra-va-giao-hang',
                component: ShipvReturn
            },
            {
                path: '/faq',
                component: Faq
            },
            {
                path: '/lien-he',
                component: ContactPage
            },
            {
                path: '/gio-hang',
                component: ShoppingCart
            },
            {
                path: '/cua-hang/:slug',
                component: ProductPage
            },
            {
                path: '/cua-hang',
                component: ShopPage
            },
            {
                path: '/dat-hang-thanh-cong',
                component: OrderCompleted
            },
            {
                path: '/thanh-toan',
                component: CheckoutPage
            },
            {
                path: '/dang-nhap',
                component: AuthPage
            },

            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/',
                component: Error404
            },
        ]
    },
]

export default routes






{/* <Route exact path="/" component={Home} />
              <Route path="/gioi-thieu" component={AboutPage} />
              <Route path="/cua-hang" component={ShopPage} />
              <Route path="/dia-chi" component={StoreLocator} />
              <Route path="/doi-tra-va-giao-hang" component={ShipvReturn} />
              <Route path="/faq" component={Faq} />
              <Route path="/lien-he" component={ContactPage} />
              <Route path="/gio-hang" component={ShoppingCart} />
              <Route path="/san-pham" component={ProductPage} />
              <Route path="/dat-hang-thanh-cong" component={OrderCompleted} />
              <Route path="/thanh-toan" component={CheckoutPage} />
              <Route path="/dang-nhap" component={AuthPage} />
              <PrivateRoute path="/tai-khoan" component={AccountPage} />
              <Route component={Error404} /> */}