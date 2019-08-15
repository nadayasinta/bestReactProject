import React from "react";
import Signin from "./pages/signin";
import Profile from "./pages/profile";
import "./styles/main.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signin" component={Signin} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
