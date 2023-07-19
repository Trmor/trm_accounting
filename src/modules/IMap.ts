/**
 * Class controller, operates with specified class, creates, edits, deletes etc...
 */
class IMap {

    protected static container: Array<any>;


    /**Creates the object of a controlled class */
    static create(...args: any[]): void {};
    /**Edits the object from a container */
    static edit(...args: any[]): void {};
    /** Edits the object from a container */
    public static delete(id: number): void {
        this.container.splice(id, 1);
    }
    /** Gets one the object from a container */
    static getById(id: number): any {};
    /** Returns promise of an object container specified in implementation */
    static getContainer(): any {
        return new Promise((resolve, reject) => {
            resolve(this.container);
        });
    };
    /** Sets container of the responsible class */
    static setContainer(container : Array<any>): any {
        this.container = container;
    }
     
}

export {IMap}
