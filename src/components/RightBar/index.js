import React from 'react';
import _ from 'lodash';

import './index.css';
import issues from '../issuesForTesting';
import TagsCard from './TagsCard';
import ToDoListCard from './ToDoListCard';
import IntroductionCard from './IntroductionCard';
import ContactCard from './ContactCard';
import { getTags } from '../../utils';

class RightBar extends React.Component {

    state = {
        tagList: [],
        currentTime: new Date()
    }

    componentWillMount() {
        this.setState({tagList: getTags(issues)});
        setInterval(() => {
            let currentTime = new Date();
            this.setState({
                currentTime: currentTime
            });
        }, 1000)
    }
    
    render() {
        return (
            <div>
                <IntroductionCard currentTime = {this.state.currentTime} issues = {issues}/>

                <ContactCard />

                <TagsCard tagList={this.state.tagList} />

                <ToDoListCard />
            </div>
        )
    }
}

export default RightBar;