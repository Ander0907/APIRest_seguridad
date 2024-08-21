import { Router } from "express";
import {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/", getAllProducts); // Trae los productos asi: api/products => [...]
appRouter.get("/:id", getProduct); // Trae el producto asi: api/products/id
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updateProduct);
appRouter.delete("/delete/:id", deleteProduct);


export default appRouter;