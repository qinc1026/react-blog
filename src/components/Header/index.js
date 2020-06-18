import React from 'react';
import { Row, Col, Affix} from 'antd';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    FolderOpenOutlined,
    IdcardOutlined
  } from '@ant-design/icons';
import logoImage from '../../image/qin.png'
import './index.css'

class Header extends React.Component{
    render() {
        return (
            <Affix offsetTop={0}>
                <Row className="home-header">
                    <Col span={6} offset={0} >
                        <div className="home-header-title">
                            <Link to="/">
                                QC的个人主页
                            </Link>
                        </div>
                    </Col>
                    <Col span={4} offset={0}>
                        <img src= {logoImage} />
                    </Col>
                    <Col offset={6} span={8} className='home-header-button'>
                        <div className='home-header-button-item'>
                            <Link to='/'>
                                <span className='home-header-button-index'>
                                    <HomeOutlined />
                                    首页
                                </span>
                            </Link>
                        </div>
                        <div className='home-header-button-item'>
                            <Link to='/'>
                                <span className='home-header-button-index'>
                                    <FolderOpenOutlined />
                                    归档
                                </span>
                            </Link>
                        </div>
                        <div className='home-header-button-item'>
                            <Link to='/'>
                                <span className='home-header-button-index'>
                                    <IdcardOutlined />
                                    关于
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Affix>
        )
    }
}

export default Header;