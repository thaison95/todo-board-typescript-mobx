import React, { Component } from 'react';
// import Container from './Container';
import { TodoModel, ITEM_STATUS } from '../models/TodoModel';
import { observer, inject } from 'mobx-react';
import TodoStore from '../stores/TodoStore';
import { TODO_STORE } from '../stores/constants';
import { Input, Row, Col, List, Card } from 'antd';
import Item from './Item';

interface BoardState {
    todos: Array<TodoModel>
}

@inject(TODO_STORE)
@observer
class Board extends Component<any, BoardState> {

    todoStore = this.props[TODO_STORE] as TodoStore;

    onAddTodo = (value: string) => {
        this.todoStore.addTodo({ value: value, status: ITEM_STATUS.TODO });
        setTimeout(() => {
            (document.getElementById('todo_input') as HTMLInputElement).value = '';
        });
    }

    render() {
        return (
            <div className="board">
                <h2>Todo board</h2>
                <Row className="m-b-10">
                    <Col span={8} className="p-r-8">
                        <Input.Search
                            id="todo_input"
                            placeholder="Add todo"
                            enterButton="Add"
                            size="small"
                            onSearch={value => this.onAddTodo(value)}
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Todo">
                            <List
                                itemLayout="horizontal"
                                dataSource={this.todoStore.getItemByStatus(ITEM_STATUS.TODO)}
                                renderItem={(item: TodoModel) => (
                                    <List.Item>
                                        <Item itemTodo={item}/>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Inprogress">
                            <List
                                itemLayout="horizontal"
                                dataSource={this.todoStore.getItemByStatus(ITEM_STATUS.INPROGRESS)}
                                renderItem={(item: TodoModel) => (
                                    <List.Item>
                                        <Item itemTodo={item}/>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Complete">
                            <List
                                itemLayout="horizontal"
                                dataSource={this.todoStore.getItemByStatus(ITEM_STATUS.COMPLETE)}
                                renderItem={(item: TodoModel) => (
                                    <List.Item>
                                        <Item itemTodo={item}/>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Board;