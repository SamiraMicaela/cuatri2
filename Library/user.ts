export class User{
    private id : string = uid();
    public name:string;
    private addres:string;
    private phoneNumber:number;

    constructor(name:string,addres:string,phoneNumber:number){
        this.name=name;
        this.addres=addres;
        this.phoneNumber=phoneNumber;
    };

    loanLibraryItem():void{};
    returnLibraryItem():void{};
}