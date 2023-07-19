import Typography from 'antd/es/typography/Typography'
import React, { useEffect, useState } from 'react'
import { getInventory, getOrders } from '../../API/Index'
import { Avatar, Rate, Space, Table } from 'antd'

function Orders() {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products);
            setLoading(false);
        })
    }, [])

    return (
        <Space size={20} direction='vertical'>
            <Typography.Title level={4}>
                Orders
            </Typography.Title>
            <Table 
            loading={loading}
            columns={[
                {
                    title:"Title",
                    dataIndex:"title"
                },
                {
                    title:"Price",
                    dataIndex:"price",
                    render:(value) =><span>${value}</span>
                },
                {
                    title:"Quantity",
                    dataIndex:"quantity"
                },
                {
                    title:"Total",
                    dataIndex:"total",
                    render:(value) =><span>${value}</span>
                },
                {
                    title:"DiscountPercentage",
                    dataIndex:"discountPercentage",
                    render:(value) =><span>{value}%</span>
                },
                {
                    title:"DiscountedPrice",
                    dataIndex:"discountedPrice",
                    render:(value) =><span>${value}</span>
                },
            ]}
            dataSource={dataSource}
            pagination={{
                pageSize:5,
            }}
            >
            </Table>
        </Space>

    )
}

export default Orders

