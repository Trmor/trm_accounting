class Bank {
    name: string;
    money: number; 

    constructor(name: string, money:number){
        this.name = name;
        this.money = money;
    }
}

class bankController implements IMap {
    
    create(name: string, money: number): void {
        let bank : Bank = new Bank(name, money);
        this.container.push(bank);
    }
    edit(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
    getById() {
        throw new Error("Method not implemented.");
    }

    container: Array<Bank>;
    
}