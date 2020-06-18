import React from 'react';
import { Tag } from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash';

export function renderTagList (tagList) {
    if (tagList && tagList.length) {
        return tagList.map((tag, index) => {
            return (
                <Tag key={index} color={`#${tag.color}`} className='tag'>
                    <Link to={`/tagblog/${tag.name}`}>
                        {tag.name}
                    </Link>
                </Tag>
            );
        })
    } else {
        return 'No tag found 暂无标签'
    }
}

export function getTimeDiff (currentTime) {
    var createTimeStamp = 1592130627000;
    var currentTimestamp = currentTime.getTime();

    let timeDiffInSec = Math.floor((currentTimestamp - createTimeStamp) / 1000);
    const oneMinuteInSec = 60;
    const oneHourInSec = 60 * oneMinuteInSec;
    const oneDayInSec = 24 * oneHourInSec;

    var dayDiff = Math.floor(timeDiffInSec / oneDayInSec);
    var secDiff = timeDiffInSec % oneDayInSec;


    var hourDiff = Math.floor(secDiff / oneHourInSec);
    secDiff -= hourDiff * oneHourInSec;

    var minuteDiff = Math.floor(secDiff / oneMinuteInSec);
    secDiff -= minuteDiff * oneMinuteInSec;

    return dayDiff + '天' + hourDiff + '时' + minuteDiff + '分' + secDiff + '秒';
}

export function getTags (issues) {
    if (issues && issues.length) {
        var tags = [];
        issues.map((issue) => {
            if (issue.labels && issue.labels.length) {
                issue.labels.map((label) => {
                    tags.push(label);
                })
            }
        });
        tags = _.uniqBy(tags, 'id');
        return tags;
    }
}