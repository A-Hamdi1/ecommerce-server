const fs = require("fs");

const categoriesFolder = "./public/Categories";
const brandsFolder = "./public/Brands";
const productsFolder = "./public/Products";

const CreateAllFolder = () => {
  if (!fs.existsSync(categoriesFolder)) {
    fs.mkdirSync(categoriesFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(brandsFolder)) {
    fs.mkdirSync(brandsFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(productsFolder)) {
    fs.mkdirSync(productsFolder, {
      recursive: true,
    });
  }
};

module.exports = CreateAllFolder;
