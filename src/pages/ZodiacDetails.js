import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";

const baseUrl = "https://zodiacal.herokuapp.com/api";

class ZodiacDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listZodiac: [],

            listimage: [
                "Aries",
                "Taurus",
                "Gemini",
                "Cancer",
                "Leo",
                "Virgo",
                "Libra",
                "Scorpio",
                "Sagittarius",
                "Capricorn",
                "Aquarius",
                "Pisces"
            ]
        };
    }

    componentWillMount = () => {
        const self = this;
        axios
            .get(baseUrl)
            .then(function(response) {
                self.setState({ listZodiac: response.data });

                console.log(response.data[0]);
                console.log(self.state.listZodiac);
            })
            // Handle Error
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        console.log(this.state.listZodiac);
        console.log(this.props.listimage);

        return (
            <div>
                <Header />
                {this.state.listZodiac
                    .filter(
                        zodiac => zodiac.name === this.props.match.params.zodiac
                    )
                    .map(zodiac => {
                        return (
                            <div className="container m-0 zodiacdetails wrapper">
                                <div className="row justify-content-center text-center">
                                    <div className="col-md-3 col-sm-12 py-3">
                                        <img
                                            src={
                                                this.props.listimage[
                                                    this.state.listimage.indexOf(
                                                        this.props.match.params
                                                            .zodiac
                                                    )
                                                ]
                                            }
                                            class="w-100"
                                        />
                                    </div>
                                    <div className="col-md-9 col-sm-12 contain p-4 border shadow">
                                        <h2 class="font-weight-bold">
                                            {zodiac.name.toUpperCase()}
                                        </h2>
                                        <h5>
                                            {zodiac.sun_dates[0] +
                                                " - " +
                                                zodiac.sun_dates[1]}
                                        </h5>
                                        <br />
                                        <h4 class="font-weight-bold">
                                            Mental Traits
                                        </h4>
                                        <h5>
                                            {zodiac.mental_traits.map(trait => {
                                                return trait + ". ";
                                            })}
                                        </h5>
                                        <br />
                                        <div class="row">
                                            <div class="col-6">
                                                <h4 class="font-weight-bold">
                                                    Famous People
                                                </h4>
                                                <h5 className="famous">
                                                    {zodiac.famous_people
                                                        .slice(0, 5)
                                                        .map(trait => {
                                                            return (
                                                                <h5>{trait}</h5>
                                                            );
                                                        })}
                                                </h5>
                                            </div>
                                            <div class="col-6">
                                                <h4 class="font-weight-bold">
                                                    Good Traits
                                                </h4>
                                                {zodiac.good_traits.map(
                                                    trait => {
                                                        return (
                                                            <h5>
                                                                {trait.toLowerCase()}
                                                            </h5>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
// }

// export default BlogByCategory;
export default connect(

    "listZodiac, listimage",
    actions
)(ZodiacDetails);
