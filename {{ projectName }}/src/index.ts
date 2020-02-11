import getRawBody from 'raw-body';
import { HttpTrigger } from './types/trigger';

const httpTrigger: HttpTrigger = (req, resp) => {
  console.log(req);

  const params = {
    path: req.path,
    queries: req.queries,
    headers: req.headers,
    method: req.method,
    requestURI: req.url,
    clientIP: req.clientIP,
    body: null,
  };

  getRawBody(req, (err, body) => {
    resp.setHeader('content-type', 'text/plain');

    Object.keys(req.queries).forEach(key => {
      resp.setHeader(key, req.queries[key]);
    });

    params.body = body.toString();
    resp.send(JSON.stringify(params, null, '    '));
  });
};

// http trigger entry
module.exports.handler = httpTrigger;
