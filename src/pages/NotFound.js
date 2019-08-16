import React from "react";
import axios from "axios";
import ZodiacDaily from "../components/zodiacdaily";
import { Redirect, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";

// const url = "https://zodiacal.herokuapp.com/api";
const url = "http://sandipbgt.com/theastrologer/api/horoscope/";

class NotFound extends React.Component {
    render() {
        let linkStyle;
        if (this.state.hover) {
            linkStyle = { backgroundColor: "red" };
        } else {
            linkStyle = { backgroundColor: "blue" };
        }
        console.log("daily", this.state.listDailyZodiac);
        return (
            <div>
                <Header />
                <div class="container not-found">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="font-weight-bold mt-5">
                                404 Not Found
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
