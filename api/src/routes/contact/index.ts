import {Request, Router} from "express";
import ContactController from "../../controllers/Contact";
import { csrfProtection } from "../../config/csurf";
import rateLimit from "express-rate-limit";

const router: Router = Router();

const mailLimiter = rateLimit({
  // Interval window 24 hour/ 1 day
  windowMs: 24 * 60 * 60 * 1000,
  max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message:  'Too many message sent from this IP, please try again after tomorrow',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.route('/send_mail')
  .get( ContactController.mailerReady)
  .post( mailLimiter, ContactController.sendMail);


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

export default router;