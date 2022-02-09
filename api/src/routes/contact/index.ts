import { Router, Request, Response } from "express";
import ContactController from "../../controllers/Contact";

const router: Router = Router();

router.get('/send_mail', ContactController.sendMail);

export default router;