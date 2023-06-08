interface IMap {

    container: Map<number, any>;

    create(): void;
    edit(): void;
    delete(): void;
    getById(): any;
    
}
