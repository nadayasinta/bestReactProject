import React from "react";
// import Header from "../component/Header";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Swal from "sweetalert2";

export class Signin extends React.Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            // Swal.fire("Good job!", "You have been signed in!", "success");
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 2000
            });

            Toast.fire({
                type: "success",
                title: "You have been signed in!"
            });
            this.props.history.replace("/profile");
            console.log("this props history, ", this.props.history);
        });
    };

    render() {
        console.log("state", this.state);
        return (
            <div className="container sign-in-content">
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                        <form onSubmit={e => e.preventDefault()}>
                            <h4 className="animated fadeInDown">Sign In</h4>
                            <div>
                                <label
                                    for="username"
                                    className="animated fadeInDown"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    className="input-username animated fadeInDown"
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    className="animated fadeInDown"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input-password animated fadeInDown"
                                />
                            </div>
                            <button
                                onClick={() => this.doLogin()}
                                className="btn animated fadeInDown"
                            >
                                Sign In
                            </button>
                            <button
                                type="reset"
                                className="btn animated fadeInDown"
                            >
                                Reset
                            </button>
                        </form>
                    </div>
                    <div className="col-md-8 text-right right-pic">
                        <img src="https://image.flaticon.com/sprites/new_packs/432104-zodiac-signs.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "username, password, isLogin",
    actions
)(Signin);
