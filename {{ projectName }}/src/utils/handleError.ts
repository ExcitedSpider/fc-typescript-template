/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-20 17:29:05
 * @Description 错误处理的公共方法
 * @FilePath /fc-demo/src/utils/handleError.ts
 */
import { FcHttpRequest, FcHttpResponse } from '@/types/http';

const handleError = (
  req: FcHttpRequest,
  resp: FcHttpResponse,
  error: Error,
) => {
  if (error) {
    resp.setStatusCode(500);
    console.error('internal error:', error?.message);
    resp.send(
      JSON.stringify({
        path: req.path,
        method: req.method,
        body: req.body,
        queries: req.queries,
        error: { ...error },
      }),
    );
  } else {
    resp.setStatusCode(404);
    resp.send(`Cannot ${req.method} ${req.path}`);
  }
};

export default handleError;
