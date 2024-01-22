"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contact_1 = __importDefault(require("../../controllers/Contact"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
const mailLimiter = (0, express_rate_limit_1.default)({
    // Interval window 24 hour/ 1 day
    windowMs: 24 * 60 * 60 * 1000,
    max: 5,
    message: 'Too many message sent from this IP, please try again after tomorrow',
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
router.route('/send_mail')
    .get(Contact_1.default.mailerReady)
    .post(mailLimiter, Contact_1.default.sendMail);
// One method on this route
// router.get('/path', () => {})
/* Multiple method on route
router.route('/path')
  .all(()=> {
    // Code executed for all methods
    ....
    next()
  })
  .get()
  .put()
  .post()
  ...
  .delete();
*/
exports.default = router;
