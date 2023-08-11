const data = require('../data');

const pagination = (limt = 6, page = 1, word) => {
  const findWord =
    data.filter((el) => el.name.includes(word?.toLocaleLowerCase())) ||
    el.name.includes(word?.toUpperCase());
  const numberOfPages = findWord.length
    ? Math.ceil(findWord.length / +limt)
    : Math.ceil(data.length / +limt);

  const start = (+page - 1) * +limt;
  const end = start + +limt;
  const newData = findWord.length
    ? findWord.slice(start, end)
    : data.slice(start, end);
  return {
    pagination: {
      limt,
      numberOfPages,
      page,
    },
    newData,
  };
};

const getAllProducts = (req, res) => {
  const { limt, page, word } = req.query;
  const data = pagination(limt, page, word);
  res.json({
    status: 200,
    data,
  });
};

const getOneProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = data.filter((el) => el.id === +id);
  if (findProduct.length) {
    res.json({
      product: findProduct,
      status: 'success',
    });
  } else {
    res.json({
      product: [],
      status: 'failed',
    });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
