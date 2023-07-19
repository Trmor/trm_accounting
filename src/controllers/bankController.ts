import { request, response } from "express";
import { bankModel } from "../models/bankModel";

exports.createPage = (request, response)=>{
    response.render("bank/create");
};
exports.createPost = (request, response)=>{
    bankModel.create(request.body.name, request.body.money);
    response.redirect("/bank/create");
};
exports.show = (request, response)=>{
    Promise.resolve(bankModel.getContainer()).then((data) =>{
        console.log(data);
        response.render("bank/show", {Banks: data});
    });
};
exports.delete = (request, response)=>{
    bankModel.delete(request.params.id as unknown as number);
    response.redirect("/bank/show");
};
exports.edit = (request, response)=>{
    const rb = request.body;
    bankModel.edit(rb.id, rb.name, rb.money);
    response.redirect("/bank/show");
};