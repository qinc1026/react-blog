import React from 'react';
import { Row, Col} from 'antd';

import Header from './Header';
import BlogList from './BlogList';
import RightBar from './RightBar';
import Footer from './Footer';
import './App.css'

class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Row className='bg'>
                    <Col span={16} offset={4} style={{marginTop:20}}>
                        <Row>
                            <Col span={16}>
                                <BlogList />
                            </Col>
                            <Col span={6} offset={2}>
                                <RightBar />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

export default App;