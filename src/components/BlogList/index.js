import React from 'react';
import { Row, Pagination  } from 'antd';
import { connect } from 'react-redux';

import './index.css'
import Banner from './Banner';
import ArticleCards from './ArticleCards';
import { getIssues, articlesPaging } from '../../actions';

class BlogList extends React.Component {
    state = {
        page: 1,
        pageSize: 8
    }

    componentDidMount() {
        this.props.getIssues();
    }

    componentWillReceiveProps(newProps){
        if(this.props.articles!==newProps.articles){
            const { page, pageSize } = this.state;
            this.pageChange(page, pageSize);
        }
    }

    pageChange = (page, pageSize) => {
        let start = (page - 1) * pageSize;
        let end = page * pageSize;
        this.props.articlesPaging(start, end);
    }

    render() {
        if (!this.props.articles) {
            return null;
        }
        return (
            <Row style={{width:'100%',height:'100%'}}>
                <Banner />
                <ArticleCards />>
                <Pagination 
                    hideOnSinglePage={true}
                    total={this.props.articles.length}
                    page={this.state.page}
                    pageSize={this.state.pageSize}
                    onChange={this.pageChange}
                    className='blog-list-pagination'
                />
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.issues.articles,
    };
}

export default connect(mapStateToProps , { getIssues, articlesPaging })(BlogList);;