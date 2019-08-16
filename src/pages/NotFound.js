import React from "react";
import Header from "../components/header";

class NotFound extends React.Component {
    render() {
        console.log("daily", this.state.listDailyZodiac);
        return (
            <div>
                <Header />
                <div class="container not-found">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="font-weight-bold mt-5">
                                404 Not Found
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
