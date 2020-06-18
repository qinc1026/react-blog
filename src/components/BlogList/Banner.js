import React from 'react';
import { Card } from 'antd';

const Banner = () => {
    return (
        <Card title="欢迎来到我的博客" bordered={false} className='blog-list-card'>
            好好学习，好好攒钱。
        </Card>
    )
}

export default Banner;