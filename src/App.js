import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import store from './redux';
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


import "./assets/style/custom.scss"
import PrivateRoute from './core/PrivateRoute';
import TranslateProvider from './core/Translate';
import vi from './translate/vi.json'

let translate = {
  vi: vi
}

function App() {
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store} >
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
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

              <Route component={Error404} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  )

}

export default App;
