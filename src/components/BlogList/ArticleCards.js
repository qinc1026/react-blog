import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import {
    CalendarOutlined,
    TagsOutlined
  } from '@ant-design/icons';
import { connect } from 'react-redux';

import './index.css';
import { renderTagList, getTags } from '../../utils';

class ArticleCards extends React.Component {
    createTitle = (issue) => {
        return (
            <Link to={`/blog/${issue.number}`}>
                <h3>
                    {issue.title}
                </h3>
            </Link>
        )
    }
    createDescription = (issue) => {
        let tags = getTags([issue]);
        return (
            <div>
                <Row>
                    <Col>
                        <TagsOutlined />
                        {renderTagList(tags)}
                    </Col>
                    <Col>
                        <CalendarOutlined />
                        {new Date(issue.created_at).toDateString()}
                    </Col>
                </Row>
                <Row>
                    <p className='blog-content'>
                        {issue.body}
                    </p>
                    
                </Row>
            </div>
        )
    }
    render() {
        return(
            this.props.articles.map((issue, index) => {
                return (
                    <Card key={index} className='blog-list-card'>
                        <Card.Meta 
                            title={this.createTitle(issue)}
                            description={this.createDescription(issue)}
                        />
                    </Card>
                )
            })
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.issues.articlesToShow
    };
}

export default connect(mapStateToProps , null)(ArticleCards);