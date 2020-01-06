import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../App';
import LoginButton from './LoginButton';
import styled from 'styled-components';

const { Content, Header, Footer, Sider } = Layout;

interface MainLayoutProps extends RouteComponentProps {
  children: React.ReactNode;
}

const MainLayout = ({ children, location }: MainLayoutProps) => {
  const currentRoute = routes.find(route => route.path === location.pathname);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Logo />
        <Menu theme="dark" mode="inline" selectedKeys={currentRoute ? [currentRoute.index] : ['1']}>
          {routes.map(route => (
            <Menu.Item key={route.index}>
              <Icon type={route.icon} />
              <span>{route.label}</span>
              <Link to={route.path} />
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <HeaderWrapper>
            <LoginButton />
          </HeaderWrapper>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 'calc(100vh - 104px)'
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Orchestra ©2020</Footer>
      </Layout>
    </Layout>
  );
};

const HeaderWrapper = styled.div`
  float: right;
  paddingright: 20px;
`;

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export default withRouter(MainLayout);
