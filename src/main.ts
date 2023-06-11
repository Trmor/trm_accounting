import express, { request, response } from 'express';
import  {bankController} from "./bankController";
import { opertaionController } from './operationController';

const app = express();
const port = 3000;
const urlencodedParser = express.urlencoded({extended: false});

app.listen(port, () => console.log(`Running on port ${port}`));
app.set("view engine", "hbs");
app.set("views", "./src/views")

app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.get("/bank/create", (request, response) => {
    response.render("bank/create");
});

app.post("/bank/create", urlencodedParser, (request, response) => {
    bankController.create(request.body.name, request.body.money);
    response.redirect("/bank/create");
});

app.get("/bank/show", (request, response) => {
    let data = bankController.getContainer();
    response.render("bank/show", {Banks: data});
});

app.post("/bank/delete/:id", (request, response) => {
    bankController.delete(request.params.id as unknown as number);
    response.redirect("/bank/show");
})

app.post("/bank/edit", urlencodedParser, (request, response) => {
    bankController.edit(request.body.id, request.body.name, request.body.money);
    response.redirect("/bank/show");
})

app.get("/operation/show", (request, response) => {
    let banks = bankController.getContainer();
    let operations = opertaionController.getContainer();
    Promise.all([operations, banks]).then(data=>{
        response.render("operation/show", {data:data});
    }); 
})

app.post("/operation/delete/:id", (request, response) => {
    bankController.delete(request.params.id as unknown as number);
    response.redirect("/operation/show");
})

app.get("/operation/create", (request, response) => {
    // Promise.all([bankController.getContainer(), groupController.getContainer()]).then(data => {});
    response.render("operation/create");
})

app.post("/operation/create", urlencodedParser, (request, response) => {
    let date : Date = new Date(request.body.date);
    let rb = request.body;
    opertaionController.create(date, rb.money, rb.bankId, rb.description, rb.group);
})
