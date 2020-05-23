import React from 'react';
import '../css/Phone.css';
import phone_image_1 from './images/phone_image_main_1.png'
import phone_image_2 from './images/phone_image_main_2.png'

function Phone() {
    return (
        <div className={"Phone"}>
            <div className={"Phone__Main"}>
                <div className={"Phone__Black"}>
                    <div className={"Phone__Black-Head"}>
                        <div className={"Phone__Black-Camera"}>

                        </div>
                        <div className={"Phone__Black-Speaker"}>

                        </div>
                        <div className={"Phone__Black-Blank"}></div>
                    </div>
                    <div className={"Phone__Black-Body"}>
                        <img src={phone_image_1} id={"Phone__Black-img"}/>
                    </div>
                    <div className={"Phone__Black-Foot"}>
                    </div>
                </div>
                <div className={"Phone__White"}>
                    <div className={"Phone__White-Head"}>
                        <div className={"Phone__White-Camera"}>

                        </div>
                        <div className={"Phone__White-Speaker"}>

                        </div>
                        <div className={"Phone__White-Blank"}></div>
                    </div>
                    <div className={"Phone__White-Body"}>
                        <img src={phone_image_2} id={"Phone__White-img"}/>
                    </div>
                    <div className={"Phone__White-Foot"}>
                        <div className={"Phone__White-Button"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Phone;