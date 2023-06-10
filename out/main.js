"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bankController_1 = require("./bankController");
var operationController_1 = require("./operationController");
var app = (0, express_1.default)();
var port = 3000;
var urlencodedParser = express_1.default.urlencoded({ extended: false });
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
app.set("view engine", "hbs");
app.set("views", "./src/views");
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get("/bank/create", function (request, response) {
    response.render("bank/create");
});
app.post("/bank/create", urlencodedParser, function (request, response) {
    bankController_1.bankController.create(request.body.name, request.body.money);
    response.redirect("/bank/create");
});
app.get("/bank/show", function (request, response) {
    var data = bankController_1.bankController.getContainer();
    response.render("bank/show", { Banks: data });
});
app.post("/bank/delete/:id", function (request, response) {
    bankController_1.bankController.delete(request.params.id);
    response.redirect("/bank/show");
});
app.post("/bank/edit", urlencodedParser, function (request, response) {
    bankController_1.bankController.edit(request.body.id, request.body.name, request.body.money);
    response.redirect("/bank/show");
});
app.get("/operation/show", function (request, response) {
    var banks = bankController_1.bankController.getContainer();
    var operations = operationController_1.opertaionController.getContainer();
    Promise.all([banks, operations]).then(function (data) {
        response.render("operation/show", { data: data });
    });
});
app.get("/operation/create", function (request, response) {
    // Promise.all([bankController.getContainer(), groupController.getContainer()]).then(data => {});
    response.render("operation/create");
});
app.post("/operation/create", urlencodedParser, function (request, response) {
    var date = new Date(request.body.date);
    var rb = request.body;
    operationController_1.opertaionController.create(date, rb.money, rb.bankId, rb.description, rb.group, rb.type);
});
//# sourceMappingURL=main.js.map