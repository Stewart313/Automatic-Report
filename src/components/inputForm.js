import React from 'react';
import 'antd/dist/antd.css';
// import '../index.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const InputForm = () => {
  return (
    <Space direction="vertical">
      <Input.Password placeholder="input password" />
    </Space>
  );
};
export default InputForm;