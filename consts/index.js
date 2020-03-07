const { NODE_ENV, JWT_SECRET, MONGO_PATH } = process.env;

module.exports.MONGO_OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;
module.exports.URL_PATTENR = /_^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])))(?::\d{2,5})?$/;

module.exports.SECRET_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
module.exports.TOKEN_TYPE = 'jwt';
module.exports.TOKEN_LIFE_TIME = '7d';
module.exports.COOKIE_LIFE_TIME = 3600000;

module.exports.VALIDATION_ERROR = 'ValidationError';

module.exports.MONGO_URIS = NODE_ENV === 'production' ? MONGO_PATH : 'mongodb://localhost:27017/news-explorer';
