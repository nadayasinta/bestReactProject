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
      listZodiac: []
      // this.props.listZodiac.filter(zodiac => zodiac.name === "Aries")
    };
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.match.params.category !== this.props.match.params.category) {
  //     const self = this;
  //     axios
  //       .get(
  //         baseUrl +
  //           "sources=" +
  //           self.props.match.params.category +
  //           "&apiKey=" +
  //           apiKey
  //       )
  //       .then(function(response) {
  //         self.props.setListNews(response.data.articles);
  //         // self.setState({ listNews: response.data.articles });
  //         console.log(response);
  //       });
  //   }
  // };

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
        {this.state.listZodiac
          .filter(zodiac => zodiac.name === this.props.match.params.zodiac)
          .map(zodiac => {
            return zodiac.name;
          })}
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
