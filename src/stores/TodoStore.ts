import { observable, action } from 'mobx';
import { computedFn } from "mobx-utils";
import { TodoModel, ITEM_STATUS } from '../models/TodoModel';

export class TodoStore {
    constructor() {
        this.todos = [
            {
                value: 'Have lunch',
                status: ITEM_STATUS.COMPLETE
            },
            {
                value: 'Learn Mobx',
                status: ITEM_STATUS.TODO
            },
            {
                value: 'Apply Typescript',
                status: ITEM_STATUS.INPROGRESS
            }
        ];
    }

    @observable todos: Array<TodoModel>;

    @action
    addTodo = (item: TodoModel): void => {
        this.todos.push(item);
    }

    @action
    modifyStatus = (itemP: TodoModel): void => {
        const completeIdx = this.todos.findIndex((item: TodoModel) => item.value === itemP.value);

        if (completeIdx > -1) {
            this.todos[completeIdx].status = itemP.status === ITEM_STATUS.TODO ? ITEM_STATUS.INPROGRESS : ITEM_STATUS.COMPLETE;
        }
    }

    getItemByStatus = computedFn((type: ITEM_STATUS) => {
        return this.todos.filter(item => item.status === type);
    });
}

export default TodoStore;