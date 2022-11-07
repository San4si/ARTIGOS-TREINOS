import { Router } from 'express';
import * as ConsentController from '../controllers/consentController';

const router = Router();

router.get('/consent', ConsentController.list);

router.get('/consent/:id', ConsentController.getConsent);

router.post('/consent', ConsentController.createConsent);

router.delete('/consent/:id', ConsentController.removeConsent);




export default router;