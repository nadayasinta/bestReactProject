import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";
import ZodiacMatch from "./match";

const baseUrl = "https://zodiacal.herokuapp.com/api";

class ZodiacDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listZodiac: []
    };
  }

  componentWillMount = () => {
    const self = this;
    axios
      .get(baseUrl)
      .then(function(response) {
        // self.props.setListZodiac(response.data);
        self.setState({ listZodiac: response.data });

        // self.setState({ listNews: response.data.articles });
        console.log(response.data[0]);
        // console.log(self.props.listZodiac);
        console.log(self.state.listZodiac);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.listZodiac);

    // if (this.props.isLogin === null) {
    //   return <Redirect to={{ pathname: "/signin" }} />;
    // } else {
    return (
      <div>
        <Header />
        <div className="wrapper">
          {this.state.listZodiac
            .filter(zodiac => zodiac.name === this.props.match.params.zodiac)
            .map(zodiac => {
              return (
                <div className="container m-5">
                  <div className="row justify-content-center">
                    <div className="col-md-3 text-right py-3">ini</div>
                    <div className="col-md-9 contain p-4 border shadow">
                      <div>
                        <h2 class="font-weight-bold">
                          {zodiac.name.toUpperCase()}
                        </h2>
                        <h5>
                          {zodiac.sun_dates[0] + " - " + zodiac.sun_dates[1]}
                        </h5>
                        <br />
                        <h4 class="font-weight-bold">Mental Traits</h4>
                        <h5>
                          {zodiac.mental_traits.map(trait => {
                            return trait + ". ";
                          })}
                        </h5>
                        <br />
                        <div class="row">
                          <div class="col-6">
                            <h4 class="font-weight-bold">Famous People</h4>
                            <h5 className="famous">
                              {zodiac.famous_people.slice(0, 5).map(trait => {
                                return <h5>{trait}</h5>;
                              })}
                            </h5>
                          </div>
                          <div class="col-6">
                            <h4 class="font-weight-bold">Good Traits</h4>
                            {zodiac.good_traits.map(trait => {
                              return <h5>{trait.toLowerCase()}</h5>;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <ZodiacMatch />
        </div>
      </div>
    );
  }
}
// }

// export default BlogByCategory;
export default connect(
  "listZodiac",
  actions
)(ZodiacDetails);
