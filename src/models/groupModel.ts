import { IMap } from "../modules/IMap";

class Group {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class groupModel extends IMap {
    
    public static create(name: string): void {
        let group: Group = new Group(name);
        this.container.push(group);
    }

    public static edit(id: number, name:string): void {
        let temp: Group = this.container.at(id);
        temp.name = name;
    };

    public static getById(id: number) {
        let group : Group = this.container.at(id);
        return group;
    };

    protected static container: Array<Group> = new Array<Group>;

}

export {groupModel as groupModel}