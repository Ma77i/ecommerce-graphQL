const productModel = require("../../models/model.factory");
const logger = require("../../log");

module.exports = {
  createProduct: async (parent, args) => {

    try {
      const product = await productModel.getModel("product").create(args.product);
      logger.info(`Producto creado: ${product}`);
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
  // return await productModel.create(args.product);
  },


  getAllProducts: async () => {
    try {
      const products = await productModel.getModel("product").findAll();
      logger.info(`Productos obtenidos: ${products}`);
      return products;
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
    //return await productModel.getModel("product").find();
  }
};
