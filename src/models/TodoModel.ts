export enum ITEM_STATUS {
    TODO,
    INPROGRESS,
    COMPLETE
}

export interface TodoModel {
    value: string,
    status: ITEM_STATUS
}