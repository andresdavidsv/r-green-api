const { config } = require('../../config');
const boom = require('@hapi/boom');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  const debug = require('debug')('app:error');
  debug(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  const { output: {statusCode, payload}} = err
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
