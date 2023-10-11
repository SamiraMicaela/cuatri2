import { Item } from "./item";

export class Magazzine extends Item {
    public editor: string;

    constructor(title: string, editor: string, year: string, id) {
        super(title, year,id);
        this.editor = editor;
    }

    getEditor() {
        return this.editor;
    };
    setEditor() { }
}