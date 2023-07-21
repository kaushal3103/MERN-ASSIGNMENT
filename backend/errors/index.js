
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const CustomAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
    BadRequestError,CustomAPIError,NotFoundError,UnauthenticatedError
}

