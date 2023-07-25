const {
    getData,
    getDataByID,
    createData,
    updateData,
    replaceData,
    deleteData
} = require('./service')

const createProduct = async (req, res) => {
    const product = await createData(req.body)
    res.status(201).json(product);
};

const getAllProducts = async (req, res) => {
    const products = await getData();
    res.status(200).json(products);
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await getDataByID(id);

    if (!product) {
        return res.status(404).json({
            message: 'product Not Found!'
        });
    }

    res.status(200).json(product);
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = await getDataByID(id);

    if (!product) {
        return res.status(404).json({
            message: 'product Not Found!'
        });
    }

    const updatedProduct = await updateData(id, req.body);
    res.status(200).json(updatedProduct);
};

const replaceProduct = async (req, res) => {
    const id = req.params.id;
    const replacedProduct = await replaceData(id, req.body);
    res.status(200).json(replacedProduct);
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await getDataByID(id);

    if (!product) {
        return res.status(404).json({
            message: 'product Not Found!'
        });
    }

    await deleteData(id)
    res.status(203).send();
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    replaceProduct,
    deleteProduct
};
