import React from "react";

function ZodiacDaily(props) {
    return (
        <div className="zodiacdaily">
            <div className="row justify-content-center shadow border mx-1 my-4 py-4 zodiacdaily2">
                <div className="col-12 text-center p-4">
                    <img
                        className="imgzodiacdaily w-100"
                        src={props.dailyimage}
                        alt="logo"
                    />
                </div>
                <div className="col-12 text-center">
                    <h3 className="font-weight-bold">{props.zodiac}</h3>
                </div>
                <div className="col-12 text-center">
                    <span>{props.daily}</span>
                </div>
            </div>
        </div>
    );
}

export default ZodiacDaily;
