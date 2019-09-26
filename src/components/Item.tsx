import React from 'react';
import { TodoModel, ITEM_STATUS } from '../models/TodoModel';
import { observer, inject } from 'mobx-react';
import TodoStore from '../stores/TodoStore';
import { TODO_STORE } from '../stores/constants';
import { Checkbox, Tag } from 'antd';

interface ItemProps {
    itemTodo: TodoModel,
    todoStore?: TodoStore
}

const Item = inject(TODO_STORE)(observer((props: ItemProps) => {
    return (
        // <div className="item">
        //     <p>
        //         {
        //             props.itemTodo.status !== ITEM_STATUS.COMPLETE ?
        //                 <Checkbox onChange={() => props.todoStore!.modifyStatus(props.itemTodo)} /> : null
        //         }
        //         {props.itemTodo.value}
        //     </p>
        // </div>
        <Tag color="#87d068" className="custom-tag">
            {
                props.itemTodo.status !== ITEM_STATUS.COMPLETE ?
                    <Checkbox onChange={() => props.todoStore!.modifyStatus(props.itemTodo)} /> : null
            }
            {props.itemTodo.value}
        </Tag>
    );
}));

export default Item;