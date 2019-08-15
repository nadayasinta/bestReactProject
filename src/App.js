import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.css";
import "./styles/bootstrap.min.css";

import Home from "./pages/home";
import { store } from "./store/store";
import { Provider, connect } from "unistore/react";

function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default App;
