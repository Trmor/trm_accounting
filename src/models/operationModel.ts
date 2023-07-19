import { IMap } from "../modules/IMap";
/**
 * Controlled class, used as a data holder/structure to be added to container 
 */
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
/**
 * Class controller, operates with specified class, creates, edits, deletes etc...
 */
class operationModel extends IMap{

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
        let operation = this.container.at(id);
        return operation;
    }

    /**
     * 
     * @param date1 date after
     * @param date2 date before
     * @returns Promise, array of objects
     */
    public static getByPeriod(date1, date2) {
        if(date1 === undefined){date1 = 0}
        if(date2 === undefined){date2 = Date.now()+100}
        let operations : Operation[] = [];
        this.container.forEach(element => {
            if(element.date > date1 && element.date < date2){
                operations.push(element);
            }
        });
        return new Promise((resolve, reject) => {
            resolve(operations);
        });
    }
    /**
     * 
     * @param groupId Id of a group
     * @returns Promise, array of selected objects
     */
    public static getByGroup(groupId: number) {
        let operations : Operation[] = [];
        this.container.forEach(element => {
            if(element.group === groupId){
                operations.push(element);
            }
        });
        return new Promise((resolve, reject) => {
            resolve(operations);
        });
    }
    /**
     * 
     * @param bankId Id of a bank
     * @returns Promise, array of selected objects 
     */
    public static getByBank(bankId: number) {
        let operations : Operation[] = [];
        this.container.forEach(element => {
            if(element.bankId = bankId){
                operations.push(element)
            }
        });
        return new Promise((resolve, reject) => {
            resolve(operations);
        });
    }

    protected static container:Array<Operation> = new Array<Operation>;

}

export {operationModel as operationModel}