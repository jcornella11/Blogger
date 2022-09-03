export class UserModel
{
    private _id: number = -1;
    private _firstName: string = "";
    private _lastName: string = "";
    private _email: string = "";
    private _phoneNumber: string = "";
    private _userName: string = "";
    private _password: string = "";


    constructor(id: number, firstName: string, lastName: string, email: string, phoneNumber: string, userName: string, password: string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._userName = userName;
        this._password = password;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}