import React from "react";

function ZodiacDaily(props) {
    return (
        <div class="zodiacdaily">
            <div class="row justify-content-center shadow border mx-1 my-3 py-4 zodiacdaily2">
                <div class="col-12 text-center">
                    <img
                        class="imgzodiacdaily"
                        src={props.dailyimage}
                        alt="logo"
                    />
                </div>
                <div class="col-12 text-center">
                    <h3 class="font-weight-bold">{props.daily.name}</h3>
                </div>
                <div class="col-12 text-center">
                    <span>{props.daily.mental_traits[0]}</span>
                </div>
            </div>
        </div>
    );
}

export default ZodiacDaily;
