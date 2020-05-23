import React, {useState} from 'react';
import '../css/LoginForm.css';
import instagram from './images/insta_logo.png';
import ios from './images/ios.png';
import aos from './images/android.png';
import {Link} from 'react-router-dom';


function LoginForm() {

    const [btnColor, setBtnColor] = useState("#B2DFFC");
    const [idCnt, setIdCnt] = useState(0);
    const [passCnt, setPassCnt] = useState(0);
    const [url, setUrl] = useState("/");

    const onIdChange = e => {
        let index = 0;
        let strValue = e.target.value;

        let strLen = strValue.length;

        let len = 0;
        let oneChar = "";
        setIdCnt(0);
        for (let i = 0; i < strLen; i++) {
            oneChar = strValue.charAt(i);
            if (escape(oneChar).length > 4) {
                setIdCnt(idCnt + 2);
            } else {
                setIdCnt(idCnt + 1);
            }

            if (idCnt <= index) {
                len = i + 1;
            }

        }

        console.log("idCnt", idCnt);
        console.log("passCnt", passCnt);

        if (idCnt > 0 && passCnt > 5) {
            setBtnColor("#0095F6");
            setUrl("/main");
        } else {
            setBtnColor("#B2DFFC");
            setUrl("/");
        }
    }

    const onPassChange = e => {
        let index = 6;
        let strValue = e.target.value;

        let strLen = strValue.length;

        let len = 0;
        let oneChar = "";
        setPassCnt(0);
        for (let i = 0; i < strLen; i++) {
            oneChar = strValue.charAt(i);
            if (escape(oneChar).length > 4) {
                setPassCnt(passCnt + 2);
            } else {
                setPassCnt(passCnt + 1);
            }

            if (passCnt <= index) {
                len = i + 1;
            }
        }

        console.log("idCnt", idCnt);
        console.log("passCnt", passCnt);

        if (idCnt > 0 && passCnt > 5) {
            setBtnColor("#0095F6");
            setUrl("/main");
        } else {
            setBtnColor("#B2DFFC");
            setUrl("/");
        }
    }

    return (
        <div className={"Login__Main"}>
            <div className={"Login__Form"}>
                <div>
                    <img src={instagram} id={"Login__Image-Logo"}/>
                </div>
                <div className={"Login__Form-input"}>
                    <input placeholder={"전화번호, 사용자 이름 또는 이메일"}
                           onChange={onIdChange}/>
                    <input type={"password"} placeholder={"비밀번호"}
                           onChange={onPassChange}
                    />
                </div>
                <div style={{margin: 10}}>
                    <Link to={url}>
                        <button className={"Login__Form-btn"} style={{backgroundColor: btnColor}}>로그인</button>
                    </Link>
                </div>

                <div>
                    <div>
                        또는
                    </div>
                </div>
                <div>
                    Facebook으로 로그인
                </div>
                <div>
                    비밀번호를 잊으셨나요?
                </div>
            </div>
            <div className={"Login__CreateAccount"}>
                <div>
                    계정이 없으신가요? <a href={"#"}>가입하기</a>
                </div>
            </div>
            <div className={"Login__Download"}>
                앱을 다운로드하세요.
                <div>
                    <img src={ios}/>
                    <img src={aos}/>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;