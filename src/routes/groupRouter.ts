import express from "express"
const groupController = require("../controllers/groupController");
const groupRouter = express.Router();

groupRouter.get("/create", groupController.createPage);
groupRouter.post("/create", groupController.createPost);
groupRouter.use("/delete", groupController.delete);
groupRouter.use("/edit", groupController.edit);
groupRouter.use("/show", groupController.show);

export default groupRouter;