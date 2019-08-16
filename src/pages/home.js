import React from "react";
import axios from "axios";
import ZodiacDaily from "../components/zodiacdaily";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";

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
        };
    }

    componentWillMount() {
        const self = this;
        let data = [];
        for (let i = 0; i < this.state.listZodiac.length; i++) {
            axios
                .get(url + self.state.listZodiac[i] + "/today")
                .then(function(response) {
                    data.push(response.data.horoscope);
                    self.setState({ listDailyZodiac: data });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container home">
                    <div class="row ">
                        {this.state.listDailyZodiac.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-6 col-12">
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
