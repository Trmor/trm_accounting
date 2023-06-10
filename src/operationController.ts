import { IMap } from "./IMap";

class Operation {

    date: Date;
    money: number;
    bankId: number;
    description: string;
    group: number;

    constructor(date:Date, money:number, bankId:number, description:string, group:number){
        this.date = date;
        this.money = money;
        this.bankId = bankId;
        this.description = description;
        this.group = group;
    }
}

class opertaionController extends IMap{

    public static create(date:Date, money:number, bankId:number, description:string, group:number){
        let opertation: Operation = new Operation(date, money, bankId, description, group);
        this.container.push(opertation);
    }

    public static edit(id:number, date:Date, money:number, bankId:number, description:string, group:number){
        let operation = this.container.at(id);
        operation.date = date;
        operation.money = money;
        operation.bankId = bankId;
        operation.description = description;
        operation.group = group;
    }

    public static getById(id: number) {
        let opertaion = this.container.at(id);
        return opertaion;
    }


    protected static container:Array<Operation> = new Array<Operation>;

}

export {opertaionController}