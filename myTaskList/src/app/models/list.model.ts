import { ListItem } from './list-item.model';

export class List {

    id: number;
    title: string;
    createdIn: Date;
    finishedIn: boolean;
    items: ListItem[];

    constructor(title: string, ) {
        this.id = new Date().getTime();
        this.title = title;
        this.createdIn = new Date();
        this.finishedIn = false;
        this.items = [];
    }
}