import React, { useEffect, useState } from 'react'
import Typography from 'antd/es/typography/Typography'
import { Card, Space, Statistic, Table } from 'antd'
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { getOrders, getRevenue } from '../../API/Index';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




function Dashboard() {
    return (
        <Space size={20} direction='vertical'>
            <Typography.Title level={4}>
                Dashboard
            </Typography.Title>
            <Space direction="horizontal">
                <DashboardCard icon={<ShoppingOutlined
                    style={{
                        color: 'blue',
                        backgroundColor: "rgba(0,0,255,0.20)",
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                    }}
                />} title={"Inventory"} value={12345} />

                <DashboardCard icon={<ShoppingCartOutlined
                    style={{
                        color: 'green',
                        backgroundColor: "rgba(0,255,0,0.20)",
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                    }}
                />} title={"Orders"} value={12345} />

                <DashboardCard icon={<UserOutlined
                    style={{
                        color: 'purple',
                        backgroundColor: "rgba(0,255,255,0.20)",
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                    }}
                />} title={"Customers"} value={12345} />

                <DashboardCard icon={<DollarCircleOutlined
                    style={{
                        color: 'red',
                        backgroundColor: "rgba(255,0,0,0.20)",
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                    }}
                />} title={"Revenue"} value={12345} />
            </Space>
            <Space>
                <RecentOrders />
                <DashboardChart />
            </Space>
        </Space>
    )
}

const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card>
            <Space direction='horizontal'>
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}

const RecentOrders = () => {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products.splice(0, 3));
            setLoading(false);
        })
    }, []);

    return (
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table
                columns={[
                    {
                        title: "Title",
                        dataIndex: 'title'
                    },
                    {
                        title: "Quantity",
                        dataIndex: 'quantity'
                    },
                    {
                        title: "Price",
                        dataIndex: 'discountedPrice'
                    },
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}
            >

            </Table>
        </>
    )
};

const DashboardChart = () => {

    const [revenueData, setRevenueData] = useState({
        labels:[],
        datasets:[]
    })

    useEffect(() => {
        getRevenue().then(res => {
            const labels = res.carts.map(cart => {
                return `User-${cart.userId}`
            });
            const data = res.carts.map(cart => {
                return cart.discountedTotal
            });

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(0, 255, 0, 0.8)',
                    }
                ],
            }

            setRevenueData(dataSource)

        })
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };



    return (
        <Card style={{width:500,height:250}}>
            <Bar options={options} data={revenueData} />
        </Card>
    )
}

export default Dashboard;
