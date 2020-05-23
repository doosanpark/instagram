import React, {useState} from 'react';
import "../css/Profile.css"
import home from "../images/home_icon_black.png"
import instagram from "../images/instagram_small.png"
import like from "../images/like_icon_white.png"
import message from "../images/message_icon_white.png"
import search from "../images/search_icon_white.png"
import my_picture from "../images/my_picture.jpg"
import option_icon from "../images/option_icon.png"
import dot from "../images/dotdotdot.png"
import {Link} from "react-router-dom";

function Profile() {

    const [searchBoxTextLocation, setSearchBoxTextLocation] = useState("center");

    const [albumList, setAlbumList] = useState([
        {my_picture},
        {my_picture},
        {my_picture},
        {my_picture}
    ]);
    const menuList = albumList.map((album, index) => (<div className={"item"}><img src={album}/></div>));
    function focusSearchBox() {
        setSearchBoxTextLocation("left");
    }

    function blurSearchBox() {
        setSearchBoxTextLocation("center");
    }

    function gridAlbum() {
        return (
            <div>
                {menuList}
            </div>
        )
    }

    return (
        <div className={"Profile"}>
            <div className={"Profile__Head"}>
                <img src={instagram}/>
                <input placeholder={"검색"} id={"Profile__Head-search"} style={{textAlign: searchBoxTextLocation}}
                       onBlur={blurSearchBox} onFocus={focusSearchBox}/>
                <div>
                    <img className={"Profile__Head-icon"} src={home} alt={""}/>
                    <img className={"Profile__Head-icon"} src={message} alt={""}/>
                    <img className={"Profile__Head-icon"} src={search} alt={""}/>
                    <img className={"Profile__Head-icon"} src={like} alt={""}/>
                    <img className={"Profile__Head-icon"} style={{width: "30px", height: "30px", borderRadius: "50%"}} alt={""}
                         src={my_picture}/>
                </div>
            </div>
            <div className={"Profile__Body"}>
                <div className={"Profile__Body_Info"}>
                    <div id={"my_picture"}>
                        <img className={"Profile__Head-icon"}
                             style={{width: "200px", height: "200px", borderRadius: "50%"}}
                             src={my_picture}/>
                    </div>
                    <div>
                        <div className={"Profile__Body_Summary"}>
                            dusanpark
                            <Link to={"/upload"}>
                            <button style={{
                                width: "100px", fontWeight: "bold", backgroundColor: "white",
                                border: "1px solid #cccccc ", margin: "10px"
                            }}> 사진 업로드</button>
                            </Link>
                            <img src={option_icon}/>
                        </div>
                        <div className={"Profile__Body_Summary"}>
                            게시물 9 팔로워 224 팔로우 293
                        </div>
                        <div className={"Profile__Body_Summary"}>
                            박두산
                        </div>
                    </div>
                </div>
                <div className={"Profile__Body_Album"}>
                    {albumList.map((album, index) =>
                        (<div className={"item"}><img style={{width:"200px", height:"200px"}} src={album.my_picture}/></div>))}
                </div>
            </div>

        </div>
    )
}

export default Profile;