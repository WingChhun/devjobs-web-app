// customMiddleware.js
module.exports = (req, res, next) => {
  // Store the original json function from response object
  const originalJson = res.json;

  // Custom json function to wrap the response
  res.jsonp = function (data) {
    const response = {
      data: data,
      error: null
    };

    // Call the original json function with the modified response
    return originalJson.call(res, response);
  };

  // Move to the next middleware
  next();
};
