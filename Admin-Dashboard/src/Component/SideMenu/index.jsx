import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideMenu() {
    const navigate = useNavigate()
    return (
        <div className='SideMenu'>
            <Menu
            onClick={(item)=>{
                navigate(item.key);
            }}
            items={[
                {
                    label:"Dashboard",
                    icon:<AppstoreOutlined />,
                    key:"/",
                },
                {
                    label:"Inventory",
                    key:"/inventory",
                    icon:<ShopOutlined />
                },
                {
                    label:"Orders",
                    icon:<ShoppingCartOutlined/>,
                    key:"/orders",
                },
                {
                    label:"Customers",
                    key:"/customers",
                    icon:<UserOutlined/>
                },
            ]}>

            </Menu>
        </div>
    )
}

export default SideMenu
