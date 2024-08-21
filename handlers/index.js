import { deleteRecord, find, findById, update, create } from "../db/querys.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error"})
    }
};

export const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await findById(id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error"})
    }
};

export const createProduct = async (req, res) => {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
        return res
        .status(404)
        .json({ message: "Parametros ingresados no permitidos"});
    }

    try {
        const product = await create(title, description, price);
        return res.status(201).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error"});
    }

};

export const updateProduct = async (req, res) => {
    const {title, description, price} = req.body;
    const id = req.params.id;

    if (!title || !description || !price) {
        return res
        .status(403)
        .json({ message: "Parametros ingresados no permitidos"});
    }

    try {
        const product = await update(title, description, price, id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error"});
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await deleteRecord(id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error"});
    }
};