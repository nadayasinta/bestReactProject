import createStore from "unistore";
import axios from "axios";
import Aries from "../images/aries.png";
import Taurus from "../images/taurus.png";
import Gemini from "../images/gemini.png";
import Cancer from "../images/cancer.png";
import Leo from "../images/leo.png";
import Virgo from "../images/virgo.png";
import Libra from "../images/libra.png";
import Scorpio from "../images/scorpio.png";
import Sagittarius from "../images/sagittarius.png";
import Capricorn from "../images/capricorn.png";
import Aquarius from "../images/aquarius.png";
import Pisces from "../images/pisces.png";

const intialState = {
    listzodiac: [],
    listimage: [
        Aries,
        Taurus,
        Gemini,
        Cancer,
        Leo,
        Virgo,
        Libra,
        Scorpio,
        Sagittarius,
        Capricorn,
        Aquarius,
        Pisces
    ],
    listDailyZodiac: [],
   is_login: false,
    username: "",
    password: "",
    full_name: "",
    email: "",
    avatar: ""
};

export const store = createStore(intialState);

export const actions = store => ({
    setlistzodiac(state, newlist) {
        return { listzodiac: newlist };
    },
    setListDailyZodiac(state, input) {
        console.log("list daily zodiac", state.listDailyZodiac);
        return { listDailyZodiac: input };
    },
    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://zulyano1.free.beeceptor.com/auth", data)
            .then(response => {
                console.log("respons api login", response.data);
                store.setState({
                    isLogin: true,
                    username: response.data.username,
                    email: response.data.email,
                    full_name: response.data.full_name
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    logOut(state) {
        return { isLogin: false };
    }

});
