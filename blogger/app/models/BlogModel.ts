export class BlogModel
{
    private _id: number = -1;
    private _authorName : string = "";
    private _title : string = "";
    private _introduction : string = "";
    private _body : string = "";
    private _conclusion: string = "";


    constructor(id: number, authorName: string, title: string, introduction: string, body: string, conclusion: string) {
        this._id = id;
        this._authorName = authorName;
        this._title = title;
        this._introduction = introduction;
        this._body = body;
        this._conclusion = conclusion;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get authorName(): string {
        return this._authorName;
    }

    set authorName(value: string) {
        this._authorName = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get introduction(): string {
        return this._introduction;
    }

    set introduction(value: string) {
        this._introduction = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get conclusion(): string {
        return this._conclusion;
    }

    set conclusion(value: string) {
        this._conclusion = value;
    }
}

