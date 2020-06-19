import React from 'react';
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import {
    CalendarOutlined,
    TagsOutlined
  } from '@ant-design/icons';

import { getIssue } from '../../actions';
import { renderTagList, getTags } from '../../utils';
import './index.css';

class BlogPage extends React.Component {

    loading = true;

    componentWillMount() {

        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
        this.props.getIssue(this.props.match.params.number).then(
            this.loading = false
        );
    }


    renderTitle = () => {
        if(this.props.article){
            let tags = getTags([this.props.article]);
            return (
                <Row>
                    <Row style={{width:'100%'}}>
                        <h1 className='article-titlee'>
                            {this.props.article.title}
                        </h1>
                    </Row>
                    <Row>
                        <Col offset={0} span={6} className='article-time' style={{width:'100%'}}>
                            <CalendarOutlined />
                            {new Date(this.props.article.created_at).toDateString()}
                        </Col>
                        <Col offset={12} span={6} className='blog-created-tags'>
                            <TagsOutlined />
                            {renderTagList(tags)}
                        </Col>
                    </Row>

                </Row>
            )
        } else {
            return null;
        }
    }

    renderDescription = () => {
        if(this.props.article){
            return (
                <Row>
                    <div className='article-body' dangerouslySetInnerHTML={{ __html: marked(this.props.article.body) }} style={{width:'100%'}} />
                </Row>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <Row style={{color:'#fff'}}>
                <Card style={{width: '100%'}}>
                    <Card.Meta 
                        title={this.renderTitle()}
                        description={this.renderDescription()}
                    />
                </Card>
            </Row>
        )
    }
}


const mapStateToProps = state => {
    return {
        article: state.issues.articleToShow,
    };
}

export default connect(mapStateToProps , { getIssue })(BlogPage);;