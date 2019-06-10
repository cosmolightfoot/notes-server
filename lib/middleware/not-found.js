module.exports = (res, req, next) => {
  const error = new Error('Not Found');
  error.status = 404;

  next(error);
};
