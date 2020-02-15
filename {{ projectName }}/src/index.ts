import getBody from '@/utils/getBody';
import { HttpTrigger } from './types/trigger';
import handleError from '@/utils/handleError';
import router from '@/router';

const httpTrigger: HttpTrigger = async (req, resp) => {
  const body = await getBody(req);
  Object.assign(req, { body });

  router(req, resp, error => handleError(req, resp, error));
};

// http trigger entry
module.exports.handler = httpTrigger;
