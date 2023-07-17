import { Badge, Image ,Space, Typography } from 'antd';
import { BellFilled, MailOutlined } from '@ant-design/icons';
import React from 'react';

function AppHeader() {
    return (
        <div className='AppHeader'>
            <h3>Logo</h3>
            <Typography.Title>
                Abdullah's Dashboard
            </Typography.Title>
            <Space>
                <Badge count={20} dot>
                    <MailOutlined style={{fontSize: 24}}/>
                </Badge>
                
                <Badge count={20}>
                    <BellFilled 
                    style={{fontSize: 24}}/>
                </Badge>
                
            </Space>
        </div>
    )
}

export default AppHeader
