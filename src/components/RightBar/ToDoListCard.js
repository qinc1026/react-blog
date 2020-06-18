import React from 'react';
import { Card, Checkbox, List } from 'antd';

import './index.css';

const todoList = [
    {
        'label': '加入分页功能',
        'value': true
    },
    {
        'label': '使用redux管理组件状态',
        'value': true
    },
    {
        'label': '使用axios异步获取信息',
        'value': true
    },
    {
        'label': '加入自我介绍页面',
        'value': false
    },
    {
        'label': '加入归档页面',
        'value': false
    },
    {
        'label': '加入评论功能',
        'value': false
    },
]

const renderTodoItem = (todo) => {
    return (
        <List.Item>
            <Checkbox defaultChecked={todo.value} className='checkbox' disabled >
                <b className='checkbox-text'>
                    {todo.label}
                </b>
            </Checkbox>
        </List.Item>
    );
}

const renderTodoList = () => {
    if (todoList && todoList.length) {
        return todoList.map((todo, index) => {
            return (
                <li>
                    <Checkbox key={index} defaultChecked={todo.value === 'true'} className='checkbox' disabled >
                        <b className='checkbox-text'>
                            {todo.label}
                        </b>
                    </Checkbox>
                </li>
            );
        })
    } else {
        return 'No task found 暂无计划'
    }
}

const ToDoListCard = () => {
    return (
        <Card bordered={false} className='right-bar-card' title="TodoList待实现功能">
            <List 
                dataSource={todoList}
                renderItem={renderTodoItem}
                split={false} />
            {/* {renderTodoList()} */}
        </Card>
    )
}

export default ToDoListCard;

