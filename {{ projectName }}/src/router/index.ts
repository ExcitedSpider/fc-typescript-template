import Router from 'router';
import demoHandler from '@/controller/demo';

const router = Router();

router.get('/demorouter', demoHandler);

export default router;
