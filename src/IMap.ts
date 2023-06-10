class IMap {

    protected static container: Array<any>;

    static create(...args: any[]): void {};

    static edit(...args: any[]): void {};

    public static delete(id: number): void {
        this.container.splice(id, 1);
    }

    static getById(id: number): any {};

    static getContainer(): any {
        return new Promise((resolve, reject) => {
            resolve(this.container);
        });
    };
     
}

export {IMap}
