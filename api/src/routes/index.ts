import { Router, Response, Request } from "express";
import contactRoutes from "./contact";


const router: Router = Router();



// Get Homepage
router.get('/', (req: Request, res: Response) => {
   res.send("Hello world!");
});

// Contact routes
router.use("/contact", contactRoutes);

// User routes
//router.use("/user", userRoutes);

export default router;