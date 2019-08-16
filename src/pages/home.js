import React from "react";
import axios from "axios";
import ZodiacDaily from "../components/zodiacdaily";
import { Redirect, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";

// const url = "https://zodiacal.herokuapp.com/api";
const url = "http://sandipbgt.com/theastrologer/api/horoscope/";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listZodiac: [
                "aries",
                "taurus",
                "gemini",
                "cancer",
                "leo",
                "virgo",
                "libra",
                "scorpio",
                "sagittarius",
                "capricorn",
                "aquarius",
                "pisces"
            ],
            listDailyZodiac: []
            // hover: false
        };
    }

    componentWillMount() {
        const self = this;
        let data = [];
        for (let i = 0; i < this.state.listZodiac.length; i++) {
            axios
                .get(url + self.state.listZodiac[i] + "/today")
                .then(function(response) {
                    console.log("res", response);
                    data.push(response.data.horoscope);
                    console.log("data", data);

                    console.log("zod", self.props.listzodiac);

                    console.log("img", self.props.listimage);
                    self.setState({ listDailyZodiac: data });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        // axios
        //     .get(url)
        //     .then(function(response) {
        //         console.log("res", response.data);

        //         self.props.setlistzodiac(response.data);
        //         console.log("zod", self.props.listzodiac);

        //         console.log("img", self.props.listimage);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    }

    // handleChange = event => {
    //     const self = this;
    //     if (event.target.value.length > 0) {
    //         self.setState({ value: event.target.value }, () => {
    //             axios
    //                 .get(
    //                     baseUrl +
    //                         "everything?" +
    //                         "q=" +
    //                         self.state.value +
    //                         "&" +
    //                         "from=2019-08-12&" +
    //                         "sortBy=popularity&" +
    //                         "apiKey=" +
    //                         apiKey
    //                 )
    //                 .then(function(response) {
    //                     self.props.setTopNews(response.data.articles);
    //                     console.log("search", response);
    //                 })
    //                 .catch(function(error) {
    //                     console.log(error);
    //                 });
    //         });
    //     }
    // };
    // toggleHover() {
    //     this.setState({ hover: !this.state.hover });
    // }

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
                <div class="container home">
                    <div class="row ">
                        {this.state.listDailyZodiac.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-12">
                                    <Link
                                        to={
                                            "/" +
                                            this.state.listZodiac[index]
                                                .charAt(0)
                                                .toUpperCase() +
                                            this.state.listZodiac[index].slice(
                                                1
                                            )
                                        }
                                        style={{
                                            textDecoration: "none",
                                            color: "black"
                                            // linkStyle
                                        }}
                                        className="link"
                                        // onMouseEnter={this.toggleHover}
                                        // onMouseLeave={this.toggleHover}
                                    >
                                        <ZodiacDaily
                                            daily={item.slice(
                                                0,
                                                item.length - 59
                                            )}
                                            zodiac={this.state.listZodiac[
                                                index
                                            ].toUpperCase()}
                                            dailyimage={
                                                this.props.listimage[index]
                                            }
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "listzodiac,listimage,listDailyZodiac",
    actions
)(Home);
