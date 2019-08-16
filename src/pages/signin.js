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
                <div className=" row justify-content-center">
                    <div className="col-md-4 col-sm-12 m-auto text-center">
                        <form onSubmit={e => e.preventDefault()}>
                            <div class=" row justify-content-center text-center">
                                <h4 className="animated fadeInDown">Sign In</h4>
                            </div>
                            <div class=" row justify-content-center text-center">
                                <label
                                    for="username"
                                    className="animated fadeInDown"
                                >
                                    Username
                                </label>
                            </div>

                            <div class=" row justify-content-center text-center">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    className="input-username animated fadeInDown"
                                />
                            </div>
                            <div class=" row justify-content-center text-center">
                                <label
                                    for="password"
                                    className="animated fadeInDown"
                                >
                                    Password
                                </label>
                            </div>

                            <div class=" row justify-content-center text-center">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input-password animated fadeInDown"
                                />
                            </div>
                            <div class=" row justify-content-center text-center">
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
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 col-sm-12 m-0 right-pic">
                        <img
                            className="w-100"
                            src="https://image.flaticon.com/sprites/new_packs/432104-zodiac-signs.png"
                        />
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
