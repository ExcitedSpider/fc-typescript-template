/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 17:19:51
 * @Description 发送JSON数据的统一方法，方便统一头部
 * @FilePath /fc-demo/src/utils/sendData.ts
 */
import { FcHttpResponse } from '@/types/http';

const sendData = (req: FcHttpResponse, data: object) => {
  req.setStatusCode(200);
  req.setHeader('content-type', 'application/json');
  req.send(JSON.stringify(data));
};

export default sendData;
