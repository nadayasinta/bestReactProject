import createstore from "unistore";
import axios from "axios";

const initialState = {
    is_login: false,
    username: "",
    password: "",
    email: "",
    avatar: ""
};

export const store = createstore(initialState);

export const actions = store => ({
    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth ", data)
            .then(response => {
                console.log(
                    "respons api login",
                    response.data.user_data.avatar
                );
                store.setState({
                    isLogin: true
                    // username: response.data.user_data.username,
                    // email: response.data.user_data.email,
                    // avatar: response.data.user_data.avatar
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
