import { Router, Request, Response } from "express";
import ContactController from "../../controllers/Contact";

const router: Router = Router();

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
  .get(ContactController.mailerReady)
  .post(ContactController.sendMail);

export default router;