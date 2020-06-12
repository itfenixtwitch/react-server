import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppleOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../../index.css';

const { Sider } = Layout;

class Nav extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={this.state.selectedKeys} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<AppleOutlined />}>
                  <Link to="/lebensmittel">Lebensmittel</Link>
              </Menu.Item>
          </Menu>
      </Sider>
    );
  }
}

export default Nav;