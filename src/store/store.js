import createstore from "unistore";
import axios from "axios";

const initialState = {
    is_login: false,
    username: "",
    password: "",
    full_name: "",
    email: "",
    avatar: ""
};

export const store = createstore(initialState);

export const actions = store => ({
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
