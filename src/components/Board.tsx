import React, { Component } from 'react';
import Container from './Container';
import { TodoModel, ITEM_STATUS } from '../models/TodoModel';
import { observer, inject } from 'mobx-react';
import TodoStore from '../stores/TodoStore';
import { TODO_STORE } from '../stores/constants';

interface BoardState {
    todos: Array<TodoModel>
}

@inject(TODO_STORE)
@observer
class Board extends Component<any, BoardState> {

    todoStore = this.props[TODO_STORE] as TodoStore;

    onAddTodo = () => {
        const value = (document.getElementById('todo_input') as HTMLInputElement).value;
        this.todoStore.addTodo({ value: value, status: ITEM_STATUS.TODO });
        setTimeout(() => {
            (document.getElementById('todo_input') as HTMLInputElement).value = '';
        });
    }

    render() {
        return (
            <div>
                <h2>Todo board</h2>
                <div className="m-b-10 m-l-10">
                    <input id="todo_input" onKeyPress={(e) => e.key === 'Enter' ? this.onAddTodo() : null} />
                    <button onClick={this.onAddTodo}>Add</button>
                </div>
                <Container title="To do"
                    items={this.todoStore.getItemByStatus(ITEM_STATUS.TODO)} />
                <Container title="Inprogress"
                    items={this.todoStore.getItemByStatus(ITEM_STATUS.INPROGRESS)} />
                <Container title="Complete"
                    items={this.todoStore.getItemByStatus(ITEM_STATUS.COMPLETE)} />
            </div>
        );
    }
}

export default Board;