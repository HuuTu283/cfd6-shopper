import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import store from './redux';

import "./assets/style/custom.scss"
import TranslateProvider from './core/Translate';
import vi from './translate/vi.json'

import { RouteWithSubRoutes } from './core/routerConfig';

import routes from "routes";
import { Suspense } from "react";


let translate = {
  vi: vi
}

function App() {
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store} >
        <BrowserRouter>
          <Suspense fallback={'loading....'}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Suspense>

        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  )

}
export default App;


