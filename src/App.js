import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.css";
import "./styles/bootstrap.min.css";
import Home from "./pages/home";
import { store } from "./store/store";
import { Provider, connect } from "unistore/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Profile from "./pages/profile";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/signin" component={Signin} />
                    <Route path="/profile" component={Profile} />

                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
