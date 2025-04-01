import rateLimit from "express-rate-limit";

/* Limiting contact form endpoint to a max of 10 requests per minute
*/
const formLimiter = rateLimit({
  windowMs:60 * 1000,
  max: 10,
  message:"Exceeded max request of 10 per minute",
});

module.exports = formLimiter;
