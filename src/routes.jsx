import MainLayout from './layout/MainLayout';


import Home from "./page/home";
import AboutPage from './page/about';
import ShopPage from "./page/shop";
import StoreLocator from "./page/storelocator";
import ShipvReturn from "./page/ship&return";
import Faq from "./page/faq";
import ContactPage from "./page/contact";
import ShoppingCart from "./page/shoppingcart";
import ProductPage from "./page/product";
import OrderCompleted from "./page/ordercompleted";
import CheckoutPage from "./page/checkout";
import AuthPage from "./page/auth";
import AccountPage from "./page/Account";
import Error404 from "./page/404";
import ComingSoon from "page/comingsoon";


import Orders from "page/Account/components/Orders";
import OrderDetails from "page/Account/components/OrderDetails";
import Wishlist from "page/Account/components/Wishlist";
import Address from "page/Account/components/Address";
import AddressEdit from "page/Account/components/AddressEdit";
import PaymentMethods from "page/Account/components/PaymentMethods";
import PaymentEdit from "page/Account/components/PaymentEdit";
import Info from "page/Account/components/Info";

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