interface IMap {

    container: Map<number, any>;

    create(...args: any[]): void;
    edit(...args: any[]): void;
    delete(id: number): void;
    getById(id: number): any;
    
}
