import React from 'react';
import { Card, Row, Col, Statistic, List, Avatar, Tag } from 'antd';
import { 
  ShoppingCartOutlined, 
  DollarOutlined, 
  FileTextOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/layouts/UserLayout';
import '../../styles/UserDashboard.css';

const UserDashboard = () => {
  // Sample data for user's orders
  const recentOrders = [
    {
      id: '1',
      title: 'Order #12345',
      status: 'Completed',
      date: '2024-03-15',
      amount: '$150.00',
    },
    {
      id: '2',
      title: 'Order #12346',
      status: 'Pending',
      date: '2024-03-14',
      amount: '$75.00',
    },
    {
      id: '3',
      title: 'Order #12347',
      status: 'Processing',
      date: '2024-03-13',
      amount: '$200.00',
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'processing':
        return 'processing';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircleOutlined />;
      case 'pending':
        return <ClockCircleOutlined />;
      case 'processing':
        return <ClockCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <UserLayout>
      <div className="user-dashboard">
        <h1 className="dashboard-title">My Dashboard</h1>

        {/* Statistics Cards */}
        <Row gutter={[16, 16]} className="statistics-row">
          <Col xs={24} sm={12} lg={8}>
            <Card className="stat-card">
              <Statistic
                title="Total Orders"
                value={12}
                prefix={<ShoppingCartOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="stat-card">
              <Statistic
                title="Total Spent"
                value={1250}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#52c41a' }}
                suffix="$"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="stat-card">
              <Statistic
                title="Active Orders"
                value={2}
                prefix={<FileTextOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Recent Orders */}
        <Card 
          title="Recent Orders" 
          className="recent-orders-card"
          extra={<a href="/orders">View All Orders</a>}
        >
          <List
            itemLayout="horizontal"
            dataSource={recentOrders}
            renderItem={(order) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<ShoppingCartOutlined />} />}
                  title={order.title}
                  description={
                    <div className="order-details">
                      <span className="order-date">{order.date}</span>
                      <span className="order-amount">{order.amount}</span>
                      <Tag 
                        color={getStatusColor(order.status)}
                        icon={getStatusIcon(order.status)}
                      >
                        {order.status}
                      </Tag>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions" className="quick-actions-card">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable className="action-card">
                <ShoppingCartOutlined className="action-icon" />
                <h3>New Order</h3>
                <p>Place a new order</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable className="action-card">
                <FileTextOutlined className="action-icon" />
                <h3>My Documents</h3>
                <p>View your documents</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable className="action-card">
                <DollarOutlined className="action-icon" />
                <h3>Payment History</h3>
                <p>View payment history</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </UserLayout>
  );
};

export default UserDashboard; 