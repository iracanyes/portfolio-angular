import { Router, Request, Response } from "express";
import ContactController from "../../controllers/Contact";
import csurf from "csurf";
import bodyParser from "body-parser";

const router: Router = Router();
const csrfProtection = csurf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: true });

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
  .get(csrfProtection, ContactController.mailerReady)
  .post(csrfProtection, ContactController.sendMail);

export default router;