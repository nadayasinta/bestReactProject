import React from "react";
import axios from "axios";
import Header from "../components/header";
import heart from "../images/heart.png";
import heart2 from "../images/heart2.png";

const baseUrl = "https://zodiacal.herokuapp.com/api";
const boredUrl = "http://www.boredapi.com/api/activity/";

class ZodiacMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zodiacA: "Aries",
            zodiacB: "Taurus",
            zodiacAll: [],
            zodiacCompability: [],
            match: "",
            recommendation: "",
            imagematch: "",
            matchtext: ""
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
        const self = this;
        axios
            .get(boredUrl)
            .then(function(response) {
                const zodiac = self.state.zodiacAll.filter(
                    zodiac => zodiac.name === self.state.zodiacA
                );
                let comp = zodiac[0].compatibility;

                if (comp.includes(self.state.zodiacB)) {
                    self.setState({
                        match: "YES",
                        recommendation: response.data.activity + " together",
                        imagematch: heart,
                        matchtext: "Something you can do with your partner"
                    });
                    console.log("activity", response.data.activity);
                } else {
                    self.setState({
                        match: "NO",
                        recommendation: response.data.activity,
                        imagematch: heart2,
                        matchtext: "Something you can do to cheer yourself"
                    });
                    console.log("activity", self.state.recommendation);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
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
            <div>
                <Header />
                <div className="container match_page">
                    <div className="row my-4 justify-content-center">
                        <h1 class=" text-center font-weight-bold">
                            MATCH CALCULATOR
                        </h1>
                    </div>
                    <form className="row">
                        <div className="col-4">
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
                            <label
                                for="zodiac1"
                                class="text-secondary text-center"
                            >
                                Your Zodiac
                            </label>
                        </div>
                        <div className=" col-4 align-self-start">
                            <button
                                type="submit"
                                className="btn btn-danger btn-block"
                                onClick={this.handleClick}
                            >
                                Check
                            </button>
                        </div>
                        <div className=" col-4 text-right">
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
                            <label
                                for="zodiac2"
                                class="text-secondary text-center"
                            >
                                Your Partner's Zodiac
                            </label>
                        </div>
                    </form>
                    <div class="row border  justify-content-center my-5 mx-2  py-3 shadow">
                        <div class="col-12 text-center ">
                            <h2 class=" text-center">MATCH RESULT</h2>
                            <img
                                class="  w-50 p-2 imagematch "
                                src={this.state.imagematch}
                                alt=""
                            />

                            <h1 class=" text-center font-weight-bold my-4">
                                {this.state.match}
                            </h1>
                        </div>

                        <div class="col-12">
                            <h4 class=" text-center">{this.state.matchtext}</h4>
                            <h2 class=" text-center ">
                                {this.state.recommendation}
                                {this.state.lastWord}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ZodiacMatch;
