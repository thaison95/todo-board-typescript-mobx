import React from 'react';
import Item from './Item';
import { TodoModel } from '../models/TodoModel';

interface ContainerProps {
    title: string,
    items: Array<TodoModel>
}

const Container = (props: ContainerProps) => {
    return (
        <div className="col-contain">
            <p><b>{props.title}</b></p>
            {props.items.map((item: TodoModel) => (
                <Item key={item.value} itemTodo={item} />
            ))}
        </div>
    );
};

export default Container;