import React from 'react';
import { TodoModel, ITEM_STATUS } from '../models/TodoModel';
import { observer, inject } from 'mobx-react';
import TodoStore from '../stores/TodoStore';
import { TODO_STORE } from '../stores/constants';

interface ItemProps {
    itemTodo: TodoModel,
    todoStore?: TodoStore
}

const Item = inject(TODO_STORE)(observer((props: ItemProps) => {
    return (
        <div className="item">
            <p>
                {
                    props.itemTodo.status !== ITEM_STATUS.COMPLETE ?
                        <input type="checkbox" onChange={() => props.todoStore!.modifyStatus(props.itemTodo)} /> : null
                }
                {props.itemTodo.value}
            </p>
        </div>
    );
}));

export default Item;