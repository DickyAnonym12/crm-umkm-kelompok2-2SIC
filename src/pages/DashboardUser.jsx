import React from 'react';
import { Card, Row, Col, Statistic, Table, Avatar } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, TeamOutlined } from '@ant-design/icons';
import '../styles/Dashboard.css';

import UserCard from '../components/UserCard'
import '../styles/Dashboard.css'
import '../styles/UserCard.css'

const Dashboard = () => {
  // Sample data for the dashboard
  const recentUsers = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Customer',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    // Add more sample users as needed
  ];

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <div style={{ marginLeft: 8 }}>
            <div>{text}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ 
          color: status === 'Active' ? '#52c41a' : '#ff4d4f',
          backgroundColor: status === 'Active' ? '#f6ffed' : '#fff2f0',
          padding: '4px 8px',
          borderRadius: '4px',
        }}>
          {status}
        </span>
      ),
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      
      {/* Statistics Cards */}
      <Row gutter={[16, 16]} className="statistics-row">
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <Statistic
              title="Total Users"
              value={1128}
              prefix={<TeamOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <Statistic
              title="Active Orders"
              value={93}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <Statistic
              title="Total Revenue"
              value={11280}
              prefix={<DollarOutlined />}
              valueStyle={{ color: '#722ed1' }}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <Statistic
              title="New Users"
              value={28}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#fa8c16' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Users Table */}
      <Card 
        title="Recent Users" 
        className="recent-users-card"
        extra={<a href="/users">View All</a>}
      >
        <Table 
          columns={columns} 
          dataSource={recentUsers} 
          pagination={false}
          className="users-table"
        />
      </Card>
    </div>
  );
};

export default Dashboard;


