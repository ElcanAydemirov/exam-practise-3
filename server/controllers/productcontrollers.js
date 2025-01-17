const productModel = require("../models/productmodels")

const getAll = async (req, res) => {
    try {
        const products = await productModel.find({})
        if (products) {
            return res.status(200).json({ message: "succesfully fetched", products })
        }
        return res.status(404).json({ message: "notfound" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await productModel.findById(id)
        if (product) {
            return res.status(200).json({ message: "succesfully fetched", product })
        }
        return res.status(404).json({ message: "notfound" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deletById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await productModel.findByIdAndDelete(id)
        if (product) {
            return res.status(200).json({ message: "succesfully deleted", product })
        }
        return res.status(404).json({ message: "notfound" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const editById = async (req, res) => {
    const { id } = req.params
    try {
        const updatedProduct = await productModel.findByIdAndDelete(id, req.body, { new: true })
        if (updatedProduct) {
            return res.status(200).json({ message: "succesfully updated", updatedProduct })
        }
        return res.status(404).json({ message: "notfound" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const post = async (req, res) => {
    try {
        const postedProduct = await productModel(req.body)
        postedProduct.save()
        if (postedProduct) {
            return res.status(200).json({ message: "succesfully posted", postedProduct })
        }
        return res.status(404).json({ message: "notfound" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAll, getById, deletById, editById, post }