import React from 'react';
import { Row, Affix} from 'antd';

import './index.css'

class Footer extends React.Component{
    render() {
        return (
            <Affix offsetBottom={0}>
                <Row className="home-footer">
                    <span className='home-footer-text'>
                        版权所有，侵权不究。
                    </span>
                </Row>
            </Affix>
        );
    }
}

export default Footer;