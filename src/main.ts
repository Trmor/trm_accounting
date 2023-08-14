import express, { request, response } from 'express';
import { saveload } from './modules/saveload';
import path from 'node:path'
import bankRouter from "./routes/bankRouter";
import operationRouter from "./routes/operationRouter";
import groupRouter from "./routes/groupRouter";

const app = express();
const port = 3000;
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set("view options", {layout: "layouts/layout"});

hbs.registerHelper('getNameById', (array, id)=>{return array[id].name;});
hbs.registerHelper("formatDate", (date)=>{ 
    let formatted = Date.parse(date);
    let string = new Date(formatted).toLocaleString("ru", {year:"2-digit",month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit"});
    string = string.replace(/,/g,"   \n");
    console.log(string , formatted);
    return string;
});

hbs.registerPartials(path.join(__dirname, "../../views/partials"));

app.listen(port, () => console.log(`Running on port ${port}`));

app.use(express.urlencoded({extended: false}));
app.use("/bank", bankRouter);
app.use("/operation", operationRouter);
app.use("/group", groupRouter);
app.use(express.static(path.join(__dirname, "../","/src/public")));

saveload.checkIfExists(); saveload.load();

app.get("/save", (request, response) => {
    saveload.save();
})
app.get("/", (request, response)=>{
    response.redirect("operation/show")
})
