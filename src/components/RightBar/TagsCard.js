import React from 'react';
import { Card } from 'antd';

import './index.css';
import { renderTagList } from '../../utils';

const TagsCard = (props) => {
    return (
        <Card bordered={false} className='right-bar-card' title="Tags标签">
            {
                renderTagList(props.tagList)
            }
        </Card>
    )
}

export default TagsCard;