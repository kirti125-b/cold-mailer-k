import express from  "express"
import { generateColdEmails, getEmails} from "../services/mail.service";
import { authMiddleware, deleteEmail, generateEmails, getMyEmails, sendMail, updateEmail } from "../controller/mail.controller.js";

const router = express.Router();

router.post('/generate', authMiddleware , generateEmails)
router.get('/', authMiddleware , getMyEmails);
router.get('/', authMiddleware , getmyEmailById);
router.get('/:id', authMiddleware , updateEmail);
router.get('/:id', authMiddleware , deleteEmail);
router.post('/send', authMiddleware , sendMail);

export default router;