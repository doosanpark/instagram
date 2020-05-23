import React, {useState} from 'react';
import "../css/Main.css"
import home from "../images/home_icon_black.png"
import instagram from "../images/instagram_small.png"
import like from "../images/like_icon_white.png"
import message from "../images/message_icon_white.png"
import search from "../images/search_icon_white.png"
import my_picture from "../images/my_picture.jpg"
import dot from "../images/dotdotdot.png"
import {Link} from "react-router-dom";

function Main() {

    const [searchBoxTextLocation, setSearchBoxTextLocation] = useState("center");


    function focusSearchBox() {
        setSearchBoxTextLocation("left");
    }

    function blurSearchBox() {
        setSearchBoxTextLocation("center");
    }

    return (
        <div className={"Main"}>
            <div className={"Main__Head"}>
                <img src={instagram}/>
                <input placeholder={"검색"} id={"Main__Head-search"} style={{textAlign: searchBoxTextLocation}}
                       onBlur={blurSearchBox} onFocus={focusSearchBox}/>
                <div>
                    <img className={"Main__Head-icon"} src={home}/>
                    <img className={"Main__Head-icon"} src={message}/>
                    <img className={"Main__Head-icon"} src={search}/>
                    <img className={"Main__Head-icon"} src={like}/>
                    <img className={"Main__Head-icon"} style={{width: "30px", height: "30px", borderRadius: "50%"}}
                         src={my_picture}/>
                </div>
            </div>
            <div className={"Main__Body"}>
                <div className={"Main__Body-Left"}>
                    <div className={"Main__Body-Left-friends"}>
                        <div className={"friends_profile"}>
                            <img src={my_picture} className={"friends_picture"}/>
                            doosan
                        </div>
                        <div className={"friends_profile"}>
                            <img src={my_picture} className={"friends_picture"}/>
                            cap
                        </div>
                        <div className={"friends_profile"}>
                            <img src={my_picture} className={"friends_picture"}/>
                            jjang
                        </div>
                        <div className={"friends_profile"}>
                            <img src={my_picture} className={"friends_picture"}/>
                            good
                        </div>
                        <div className={"friends_profile"}>
                            <img src={my_picture} className={"friends_picture"}/>
                            sweet
                        </div>
                    </div>

                    <div className={"Main__Body-Left-Board"}>
                        <div className={"Main__Body-Left-Board-Head"}>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={my_picture}
                                     style={{width: "50px", height: "50px", borderRadius: "50%", margin: "10px"}}/>
                                doosan park
                            </div>
                            <div style={{margin: "10px"}}><img src={dot}/></div>
                        </div>
                        <div className={"Main__Body-Left-Board-Body"}>
                            <img src={my_picture} style={{width: "100%", height: "100%"}}/>
                        </div>
                        <div className={"Main__Body-Left-Board-Bottom"}>

                        </div>
                        <div className={"Main__Body-Left-Board-Foot"}>

                        </div>
                    </div>

                </div>
                <div className={"Main__Body-Right"}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Link to={"/profile"}>
                        <button type={"button"} style={{width: "100px", backgroundColor: "white"}}>
                            <img src={my_picture} alt={""}
                                 style={{width: "80px", height: "80px",
                                     borderRadius: "50%", margin: "10px"}}/>
                        </button>
                        <button style={{width: "100px", backgroundColor: "white"}}>
                            doosanpark
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;