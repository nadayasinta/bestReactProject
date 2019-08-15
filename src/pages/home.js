import React from "react";
import axios from "axios";
import ZodiacDaily from "../components/zodiacdaily";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

const url = "https://zodiacal.herokuapp.com/api";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const self = this;
        axios
            .get(url)
            .then(function(response) {
                console.log("res", response.data);

                self.props.setlistzodiac(response.data);
                console.log("zod", self.props.listzodiac);

                console.log("img", self.props.listimage);
            })
            .catch(function(error) {
                console.log(error);
            });
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
    render() {
        return (
            <div class="container">
                <div class="row ">
                    {this.props.listzodiac.map((i, index) => {
                        return (
                            <div class="col-3">
                                <ZodiacDaily
                                    daily={i}
                                    dailyimage={this.props.listimage[index]}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default connect(
    "listzodiac,listimage",
    actions
)(Home);
