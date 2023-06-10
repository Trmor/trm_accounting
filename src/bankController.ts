import { json } from "express";
import { IMap } from "./IMap";

class Bank {
    name: string;
    money: number; 

    constructor(name: string, money:number){
        this.name = name;
        this.money = money;
    }
}

class bankController extends IMap {
    
    public static create(name: string, money: number): void {
        let bank : Bank = new Bank(name, money);
        this.container.push(bank);
    }

    public static edit(id: number, name:string, money:number): void {
        let temp: Bank = this.container.at(id);
        temp.name = name;
        temp.money = money;
    }

    public static getById(id: number) {
        //maybe unneeded
        let bank : Bank = this.container.at(id);
        return bank;
    }

    public static getSum(){
        let sum: number = 0;

        this.container.forEach(element => {
            sum += element.money;
        });        

        return new Promise((resolve, reject) => {
            resolve(sum);
        })
    }

    protected static container: Array<Bank> = new Array<Bank>;
    
}

export {bankController};