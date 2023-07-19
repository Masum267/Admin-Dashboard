import { CopyrightOutlined } from '@ant-design/icons';
import Typography from 'antd/es/typography/Typography'
import React from 'react'

function AppFooter() {
    return (
        <div className='AppFooter'>
            <Typography.Text strong><CopyrightOutlined /> Allright Reserved by Md. Abdullah Al Masum</Typography.Text>
            <Typography.Link href="tel:+8801771784769">01771784769</Typography.Link>
            <Typography.Link href="#" target={"_blank"}>
                Privacy Policy
            </Typography.Link>
            <Typography.Link href="#" target={"_blank"}>
                Terms of Use
            </Typography.Link>
        </div>
    )
}

export default AppFooter;
