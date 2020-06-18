import React from 'react';
import { Card } from 'antd';

import './index.css';
import avatar from '../../image/avatar.jpg';
import huimian from '../../image/huimian.png'
import { getTimeDiff } from '../../utils';

const meta = (issues, currentTime) => 
    <Card.Meta 
        title={
            <div>
                <span className='introduction-title'>
                    与其感慨路难行 不如马上出发
                </span> 
            </div>
        }
        description={
            <div>
                <p className='introduction-text'>
                    网站创建有:{getTimeDiff(currentTime)}
                </p>
                <p className='introduction-text'>
                    文章：{issues.length}篇
                </p>  
            </div>
        }
    />

const cover = <img src= {huimian} className='wechat'/>


const IntroductionCard = (props) => {
    let {issues, currentTime} = props;
    return (
        <Card bordered={false} className='right-bar-card'>
            {/* <div>
                <img src= {avatar} className='avatar'/>
            </div> */}
            {meta(issues, currentTime)}
        </Card>
    )
}

export default IntroductionCard;

