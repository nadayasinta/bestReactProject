import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./store/store";
import ZodiacDetails from "./pages/ZodiacDetails";
import "./App.css";
import "./styles/main.css";

function App() {
  return (
    // <div>tes</div>
    <Provider store={store}>
      <Router>
        <Switch>
          {/* harus pakai exact path biar tidak ikut terender saat halaman lain dipanggil */}
          <Route exact path="/:zodiac" component={ZodiacDetails} />
          {/* <Route exact path="/:category" component={MovieByCategory} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
