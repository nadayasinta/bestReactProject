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
import ZodiacDetails from "./pages/ZodiacDetails";
import ZodiacMatch from "./pages/match";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/match" component={ZodiacMatch} />
                    <Route path="/:zodiac" component={ZodiacDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
