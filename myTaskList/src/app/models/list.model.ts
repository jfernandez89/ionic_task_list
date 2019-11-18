import { ListItem } from './list-item.model';

export class List {

    id: number;
    title: string;
    createdIn: Date;
    isFinished: boolean;
    finishedIn: Date;
    items: ListItem[];

    constructor(title: string, ) {
        this.id = new Date().getTime();
        this.title = title;
        this.createdIn = new Date();
        this.isFinished = false;
        this.finishedIn = null;
        this.items = [];
    }
}