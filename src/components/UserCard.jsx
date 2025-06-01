import React from 'react';
import { Card, Avatar, Tag, Button } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const UserCard = ({ user }) => {
  const {
    name,
    email,
    phone,
    role,
    status,
    avatar,
    lastActive,
  } = user;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'default';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'purple';
      case 'customer':
        return 'blue';
      case 'staff':
        return 'green';
      default:
        return 'default';
    }
  };

  return (
    <Card className="user-card" hoverable>
      <div className="user-card-header">
        <Avatar 
          size={64} 
          src={avatar} 
          icon={<UserOutlined />}
          className="user-avatar"
        />
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <div className="user-tags">
            <Tag color={getRoleColor(role)}>{role}</Tag>
            <Tag color={getStatusColor(status)}>{status}</Tag>
          </div>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-item">
          <MailOutlined /> {email}
        </div>
        {phone && (
          <div className="detail-item">
            <PhoneOutlined /> {phone}
          </div>
        )}
        {lastActive && (
          <div className="detail-item last-active">
            Last active: {lastActive}
          </div>
        )}
      </div>

      <div className="user-actions">
        <Button type="primary" size="small">
          View Profile
        </Button>
        <Button size="small">
          Message
        </Button>
      </div>
    </Card>
  );
};

export default UserCard; 