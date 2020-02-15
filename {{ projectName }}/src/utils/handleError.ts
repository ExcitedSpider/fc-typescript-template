import { FcHttpRequest, FcHttpResponse } from '@/types/http';

const handleError = (
  req: FcHttpRequest,
  resp: FcHttpResponse,
  error: Error,
) => {
  console.log(req, resp, error);

  if (error) {
    resp.setStatusCode(500);
    console.error(error);
    resp.send(
      JSON.stringify({
        path: req.path,
        method: req.method,
        body: req.body,
        queries: req.queries,
        error: { ...error },
      }),
    );
  }
};

export default handleError;
