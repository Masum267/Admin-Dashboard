import Typography from 'antd/es/typography/Typography'
import React from 'react'

function AppFooter() {
    return (
        <div className='AppFooter'>
            <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
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
