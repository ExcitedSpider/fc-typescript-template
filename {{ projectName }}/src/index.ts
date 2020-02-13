import getBody from '@/utils/getBody';
import { HttpTrigger } from './types/trigger';

const httpTrigger: HttpTrigger = async (req, resp) => {
  try {
    const body = await getBody(req);
    resp.setHeader('content-type', 'application/json');
    resp.send(JSON.stringify(body));
  } catch (err) {
    resp.setStatusCode(500);
    resp.send('请求失败');
  }
};

// http trigger entry
module.exports.handler = httpTrigger;
