import getRawBody from 'raw-body';
import { FcHttpRequest } from '@/types/http';

/**
 * 获取函数body的方法
 * 为了便于拓展其他content-type的请求，写了个switch
 * @param request 函数计算http请求对象
 */
export default (req: FcHttpRequest) =>
  new Promise((resolve, reject) => {
    getRawBody(req, (err, body) => {
      if (err) {
        reject(err);
      }
      switch (req?.headers['content-type']) {
        case 'application/json':
          resolve(JSON.parse(body.toString()));
          break;
        default:
          resolve(body);
          break;
      }
    });
  });
