export class Todo {
    public id: number;
    public text: string;
    public complete: boolean;

    constructor(text: string) {
        this.id = Math.random();
        this.text = text.charAt(0).toLocaleUpperCase() + text.slice(1);
        this.complete = false;
    }
}
