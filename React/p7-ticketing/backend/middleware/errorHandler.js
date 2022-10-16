const errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENE === 'production' ? null : err.stack,
  })
}

module.exports = { errorHandler }
