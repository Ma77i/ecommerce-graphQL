const productModel = require("../../models/productsModel");

module.exports = {
  createProduct: async (parent, args) => {
    return await productModel.create(args.product);
  },

  getAllProducts: async () => {
    return await productModel.find();
  }
};
