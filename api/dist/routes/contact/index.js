"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contact_1 = __importDefault(require("../../controllers/Contact"));
const csurf_1 = __importDefault(require("csurf"));
const router = (0, express_1.Router)();
const csrfProtection = (0, csurf_1.default)({
    cookie: true
});
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
router.route('/send_mail')
    .get(Contact_1.default.mailerReady)
    .post(Contact_1.default.sendMail);
exports.default = router;
