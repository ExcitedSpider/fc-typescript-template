const getRawBody = require('raw-body');
// const getFormBody = require('body/form');
// const body = require('body');

// http trigger entry
// eslint-disable-next-line no-unused-vars
module.exports.handler = (req, resp, context) => {
  console.log('hello world');

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

  /*
  getFormBody(req, function(err, formBody) {
      for (var key in req.queries) {
        var value = req.queries[key];
        resp.setHeader(key, value);
      }
      params.body = formBody;
      console.log(formBody);
      resp.send(JSON.stringify(params));
  });
  */
};

// api gateway entry
// module.exports.handler = function(event, context, callback) {
//   server.proxy(event, context, callback);
// };
