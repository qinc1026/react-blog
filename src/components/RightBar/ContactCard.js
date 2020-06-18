import React from 'react';
import { Card, Tooltip } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    WechatOutlined,
    FileOutlined,
    MailOutlined
  } from '@ant-design/icons';

import './index.css';
import wechatQRCode from '../../image/wechatQRCode.jpg';

const ContactCard = () => {

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/chuan-qin-72096679/');
    }

    const openGithub = () => {
        window.open('https://github.com/qinc1026');
    }

    const showWechatQRCode = <img src= {wechatQRCode} className='wechat' width={200} height={200}/>

    const sendEmailToMe = () => {
        window.location = 'mailto:qccanada2013@gmail.com';
    }

    const githubButton = (
        <Tooltip>
            <GithubOutlined title='Github' className='right-bar-card-aboutme-icon' onClick={openGithub}/>
        </Tooltip>
    );

    const linkedButton = (
        <Tooltip>
            <LinkedinOutlined title='Linkedin' className='right-bar-card-aboutme-icon' onClick={openLinkedin}/>
        </Tooltip>
    );

    const wechatButton = (
        <Tooltip title={showWechatQRCode} className='right-bar-card-aboutme-icon'>
            <WechatOutlined className='right-bar-card-aboutme-icon'/>
        </Tooltip>
    );

    const resumeButton = (
        <Tooltip title='个人简历' className='right-bar-card-aboutme-icon'>
            <FileOutlined />
        </Tooltip>
    );

    const emailButton = (
        <Tooltip title='Email' className='right-bar-card-aboutme-icon'>
            <MailOutlined onClick={sendEmailToMe}/>
        </Tooltip>
    );

    const buttons = [githubButton, linkedButton, wechatButton, resumeButton, emailButton];
    return (
        <Card bordered={false} className='right-bar-card' actions={buttons}>
            <Card.Meta title="Contact Me联系我" />
        </Card>
    );
}

export default ContactCard;