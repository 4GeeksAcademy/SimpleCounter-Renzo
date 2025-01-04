import React from "react";

const CardNumber = (props) =>{
    return(
        <div>
            <div className="card text-bg-dark mb-3 mx-2">
                <div className="card-body">
                    <h1 className="card-title display-3 fw-semibold">{props.number}</h1>
                </div>
            </div>
        </div>
    );
}

const SecondCounter = (props) =>{
    return (
        <div className="d-flex flex-row p-3 bg-black justify-content-center">
            <div className="card text-bg-dark mb-3 mx-2">
                <div className="card-body">
                    <h1 className="card-title display-3 fw-semibold"><i class="fa-regular fa-clock"></i></h1>
                </div>
            </div>
            <CardNumber number={Math.floor((props.seconds/100000)%10)} />
            <CardNumber number={Math.floor((props.seconds/10000)%10)} />
            <CardNumber number={Math.floor((props.seconds/1000)%10)} />
            <CardNumber number={Math.floor((props.seconds/100)%10)} />
            <CardNumber number={Math.floor((props.seconds/10)%10)} />
            <CardNumber number={Math.floor((props.seconds/1)%10)} />
        </div>
    )
};

export default SecondCounter;