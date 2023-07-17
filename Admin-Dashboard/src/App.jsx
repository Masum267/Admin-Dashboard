import { useState } from 'react';
import { Form, Space } from 'antd';
import './App.css'
import LoginForm from './Component/Form';
import AppHeader from './Component/AppHeader';
import SideMenu from './Component/SideMenu';
import PageContent from './Component/PageContent';
import AppFooter from './Component/AppFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <PageContent/>
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App
