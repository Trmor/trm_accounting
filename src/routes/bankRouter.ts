import express from "express"
const bankController = require("../controllers/bankController");
const bankRouter = express.Router();

bankRouter.get("/create", bankController.createPage);
bankRouter.post("/create", bankController.createPost);
bankRouter.use("/delete/:id", bankController.delete);
bankRouter.use("/edit", bankController.edit);
bankRouter.use("/show", bankController.show);

export default bankRouter;