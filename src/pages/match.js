import React from "react";
import axios from "axios";

const baseUrl = "https://zodiacal.herokuapp.com/api";

class ZodiacMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zodiacA: "Aries",
            zodiacB: "Taurus",
            zodiacAll: [],
            zodiacCompability: [],
            match: "",
            recommendation: ""
        };
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ zodiacA: event.target.value });
        // console.log(this.state.zodiacA);
    };

    handleChangeTwo = event => {
        event.preventDefault();
        this.setState({ zodiacB: event.target.value });
        // console.log(this.state.zodiacA);
    };

    handleClick = event => {
        event.preventDefault();

        const zodiac = this.state.zodiacAll.filter(
            zodiac => zodiac.name === this.state.zodiacA
        );
        let comp = zodiac[0].compatibility;
        console.log("comp", comp);
        if (comp.includes(this.state.zodiacB)) {
            this.setState({ match: "YES" });
        } else {
            this.setState({ match: "NO" });
        }
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get(baseUrl)
            .then(function(response) {
                self.setState({ zodiacAll: response.data });
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <div className="col-12">
                            <label for="zodiac1">Your Zodiac</label>
                            <select
                                className="browser-default custom-select"
                                onChange={this.handleChange}
                            >
                                {console.log(this.state.zodiacA)}

                                <option value="Aries">Aries</option>
                                <option value="Taurus">Taurus</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Leo">Leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                            </select>
                        </div>
                        <div className=" col-12">
                            <label for="zodiac2">Your Partner's Zodiac</label>
                            <select
                                className="browser-default custom-select"
                                onChange={this.handleChangeTwo}
                            >
                                {console.log(this.state.zodiacB)}

                                <option selected value="Taurus">
                                    Taurus
                                </option>
                                <option value="Aries">Aries</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Leo">Leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary col-3"
                            onClick={this.handleClick}
                        >
                            Check
                        </button>
                    </form>
                    <h1>HASIL: {this.state.match}</h1>
                </div>
            </div>
        );
    }
}

export default ZodiacMatch;
