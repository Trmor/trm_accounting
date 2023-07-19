import { request, response } from "express";
import { operationModel } from "../models/operationModel";
import { bankModel } from "../models/bankModel";
import { groupModel } from "../models/groupModel";

exports.createPage = (request, response)=>{
    response.render("group/create");
};
exports.createPost = (request, response)=>{
    groupModel.create(request.body.name);
    response.redirect("/group/create");
};
exports.show = (request, response)=>{
    Promise.resolve(groupModel.getContainer()).then((data)=>{
        response.render("group/show", {Groups: data});
    })
};
exports.delete = (request, response)=>{
    bankModel.delete(request.params.id as unknown as number);
    response.redirect("/group/show");
};
exports.edit = (request, response)=>{
    const rb = request.body;
    groupModel.edit(rb.id, rb.name);
    response.redirect("/bank/show");
};
