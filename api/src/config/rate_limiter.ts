import rateLimit from "express-rate-limit";
import {Application} from "express";

const apiLimiter = rateLimit({
  // 15min in ms
  windowMs: 15 * 60 * 1000,
  // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  max: 100,
  // Return rate limit info in the `RateLimit-*` headers
  standardHeaders: true,
  // Disable the `X-RateLimit-*` headers
  legacyHeaders: false,
});

export const RateLimiter = (app: Application): void => {
  // Apply the rate limiting middleware to API calls only
  app.use('/', apiLimiter);
};