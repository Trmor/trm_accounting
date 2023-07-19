import express, { request, response } from 'express';
import { saveload } from './modules/saveload';
import path from 'node:path'
import bankRouter from "./routes/bankRouter";
import operationRouter from "./routes/operationRouter";
import groupRouter from "./routes/groupRouter";

const app = express();
const port = 3000;
var hbs = require('hbs');
hbs.registerHelper('getNameById', (array, id)=>{ return array[id].name;});

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../", "/src/views/"))
app.listen(port, () => console.log(`Running on port ${port}`));
app.use(express.urlencoded({extended: false}));
app.use("/bank", bankRouter);
app.use("/operation", operationRouter);
app.use("/group", groupRouter);


saveload.checkIfExists(); saveload.load();

app.get("/save", (request, response) => {
    saveload.save();
    response.redirect("bank/show")
})
app.get("/", (request, response)=>{
    response.redirect("operation/show")
})