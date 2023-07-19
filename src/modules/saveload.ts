import { groupModel } from "../models/groupModel";
import { bankModel } from "../models/bankModel";
import { operationModel } from "../models/operationModel";
import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs'
const path = require('path');

class saveload {
    static saveFile = "save";
    static savePath = path.join(__dirname, "../", "../", "saves/", this.saveFile + ".json");
    static optionsPath = path.join(__dirname, "../", "../", "saves/", "options.json");

    public static save(saveFile?: string) {
        Promise.all([groupModel.getContainer(), bankModel.getContainer(), operationModel.getContainer()])
        .then(data => {
            //if we have a savefile defined, then path changes to save location otherwise, stays unchanged
            if(saveFile !== "undefined"){
                this.saveFile = saveFile;
            }
            fs.writeFile(this.savePath, JSON.stringify(data));
            fs.writeFile(this.optionsPath, JSON.stringify(this.savePath))
        })
    };

    public static load(saveFile?: string): void {
        try {
            if(saveFile !== undefined){
                this.saveFile = saveFile;
            }
            fs.readFile(this.savePath, {encoding:"utf8"}).then(data => {
                let containers = JSON.parse(data);
                console.log(containers);
                if(containers !== null){              
                    groupModel.setContainer(containers[0]);
                    bankModel.setContainer(containers[1]);
                    operationModel.setContainer(containers[2]);
                }
            })
        } catch (error) {
            console.error("No file found");
        }        
    };

    public static checkIfExists(){
        const exists = existsSync(this.optionsPath);
        if(!exists){
            fs.writeFile(this.optionsPath, JSON.stringify(this.savePath));
            fs.writeFile(this.savePath, JSON.stringify(null));
        }else{
            fs.readFile(this.optionsPath, {encoding:"utf8"}).then(data => {this.saveFile = data});
        }   
    }
}

export {saveload}