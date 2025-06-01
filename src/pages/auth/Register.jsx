import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // TODO: Implement actual registration logic
    console.log('Registration values:', values);
    // For now, just redirect to login
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <div className="auth-header">
          <Typography.Title level={2} className="auth-title">
            Create Account
          </Typography.Title>
          <Typography.Text type="secondary">
            Please fill in your details to register
          </Typography.Text>
        </div>

        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          size="large"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Full Name"
              autoComplete="name"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
              { pattern: /^[0-9+\-\s()]*$/, message: 'Please enter a valid phone number!' }
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Phone Number"
              autoComplete="tel"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'Password must be at least 8 characters!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create Account
            </Button>
          </Form.Item>

          <div className="auth-footer">
            <Typography.Text type="secondary">Already have an account?</Typography.Text>
            <Link to="/login" className="auth-link">
              Sign in
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register; 