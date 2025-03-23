import rateLimit from "express-rate-limit";

/* Limiting contact form endpoint to a max of 10 requests per minute
*/
const formLimiter = rateLimit({
  windowMs:60 * 1000,
  max: 10,
  statusCode
});

module.exports = formLimiter;
