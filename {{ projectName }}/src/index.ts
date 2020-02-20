/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 17:22:09
 * @Description 函数入口文件
 * @FilePath /fc-dict/src/index.ts
 */

import getBody from '@/utils/getBody';
import { HttpTrigger } from './types/trigger';
import handleError from '@/utils/handleError';
import router from '@/router';
import sendData from '@/utils/sendData';

const httpTrigger: HttpTrigger = async (req, resp) => {
  try {
    /** 解析body */
    const body = await getBody(req);
    Object.assign(req, { body });

    /** 添加一个实用的发送数据的方法sendData */
    Object.assign(resp, {
      sendData: (data: object) => {
        sendData(resp, data);
      },
    });
  } catch (err) {
    resp.setStatusCode(500);
    resp.send('Server Error When Parse Request Body.');
  }
  router(req, resp, error => handleError(req, resp, error));
};

// http trigger entry
module.exports.handler = httpTrigger;
