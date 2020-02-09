const NotFoundError = require('../errors/error-not-found');
const { ERR_NOT_FOUND } = require('../consts/errors');

const handleWrongPath = (req, res, next) => {
  try {
    throw new NotFoundError(ERR_NOT_FOUND);
  } catch (error) {
    next(error);
  }
};

module.exports = { handleWrongPath };
