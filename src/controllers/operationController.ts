import { request, response } from "express";
import { operationModel } from "../models/operationModel";
import { bankModel } from "../models/bankModel";
import { groupModel } from "../models/groupModel";

exports.createPage = (request, response)=>{
    Promise.all([bankModel.getContainer(), groupModel.getContainer()]).then(data => {
        response.render("operation/create", {data:data});
    });
};
exports.createPost = (request, response)=>{
    let date : Date = new Date(request.body.date);
    let rb = request.body;
    operationModel.create(date, rb.money, rb.bankId, rb.description, rb.group);
};
exports.show = (request, response)=>{
    let banks = bankModel.getContainer();
    let operations = operationModel.getContainer();
    Promise.all([operations, banks]).then(data=>{
        console.log(data);
        response.render("operation/show", {data:data});
    }); 
};
exports.delete = (request, response)=>{
    bankModel.delete(request.params.id as unknown as number);
    response.redirect("/operation/show");
};
exports.edit = (request, response)=>{
    const rb = request.body;
    operationModel.edit(rb.id, rb.date, rb.money, rb.bankId, rb.description, rb.group);
};

