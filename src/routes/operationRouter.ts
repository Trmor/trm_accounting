import express from "express"
const operationController = require("../controllers/operationController");
const operationRouter = express.Router();

operationRouter.get("/create", operationController.createPage);
operationRouter.post("/create", operationController.createPost);
operationRouter.use("/delete/:id", operationController.delete);
operationRouter.use("/show", operationController.show);

export default operationRouter;