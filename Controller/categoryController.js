const Category = require("../Model/category")

exports.getCategory = async (req, res) => {
    try {
        const data = await Category.find({ active: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postCategory = async (req, res) => {
    try {
        const data = await Category.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}