/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 16:55:24
 * @Description 路由配置文件
 * @FilePath /fc-dict/src/router/index.ts
 */
import Router from 'router';
import demoHandler from '@/controller/demo';

const router = Router();

router.get('/demorouter', demoHandler);

export default router;
