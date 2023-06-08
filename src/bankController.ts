class bank {
    name: String;
    money: Number; 
}

class bankController implements IMap {
    
    create(): void {
        throw new Error("Method not implemented.");
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

    container: Map<number, bank>;
    
}