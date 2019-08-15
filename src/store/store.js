import createStore from "unistore";
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
    listDailyZodiac: []
};

export const store = createStore(intialState);

export const actions = store => ({
    setlistzodiac(state, newlist) {
        return { listzodiac: newlist };
    },
    setListDailyZodiac(state, input) {
        console.log("list daily zodiac", state.listDailyZodiac);
        return { listDailyZodiac: input };
    }
    // setTopNews(state, newnews) {
    //     return { topNews: newnews };
    // }
});
