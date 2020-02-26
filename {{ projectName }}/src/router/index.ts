/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-26 11:11:21
 * @Description 路由配置文件
 * @FilePath /{{ projectName }}/src/router/index.ts
 */
import Router from 'router';
import demoController from '@/controller/demo';
import APP_CONFIG from '@/config';

const { FC_PREFIX } = APP_CONFIG;

const router = Router();

/** demo */
router.get(`${FC_PREFIX}/demorouter`, demoController);

export default router;
