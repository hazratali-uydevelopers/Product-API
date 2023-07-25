const shortid = require('shortid');
const fs = require('fs/promises');

const getData = async () => {
    const data = await fs.readFile('data.json');
    return JSON.parse(data);
};

const getDataByID = async (id) => {
    const products = await getData();
    return products.find(item => item.id === id);
};

const setData = async (data) => {
    await fs.writeFile('data.json', JSON.stringify(data));
};

const createData = async (reqBody) => {
    const product = {
        ...reqBody,
        id: shortid.generate()
    };
    const products = await getData();
    products.push(product);
    await setData(products);
    return product;
};

const updateData = async (id, reqBody) => {
    const products = await getData();
    const product = products.find(item => item.id === id);

    product.name = reqBody.name || product.name;
    product.brand = reqBody.brand || product.brand;
    product.price = reqBody.price || product.price;
    product.color = reqBody.color || product.color;
    product.description = reqBody.description || product.description;

    await setData(products);
    return product;
};

const replaceData = async (id, reqBody) => {
    const products = await getData();
    const index = products.findIndex(item => item.id === id);

    if (index !== -1) {
        const updatedData = {
            ...reqBody,
            id: products[index].id
        };

        products[index] = updatedData;
        await setData(products);
    
        return updatedData;
    } else {
        return await createData(reqBody);
    }
};

const deleteData = async (id) => {
    const products = await getData();
    const updatedProducts = products.filter(product => product.id !== id);
    await setData(updatedProducts);
};

module.exports = {
    getData,
    getDataByID,
    createData,
    updateData,
    replaceData,
    deleteData
};