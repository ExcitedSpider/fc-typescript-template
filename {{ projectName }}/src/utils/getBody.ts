import getRawBody from 'raw-body';
import { FcHttpRequest } from '@/types/http';

type ContentTypeParser = (bodyBuffer: Buffer) => any;
interface ContentTypeParserTable {
  [contentType: string]: ContentTypeParser;
}
/** application/json */
const jsonParser: ContentTypeParser = body =>
  JSON.parse(Buffer.prototype.toString.apply(body));

/**
 * 不同content-type对应的parser配置表
 */
const contentTypeParserTable: ContentTypeParserTable = {
  'application/json': jsonParser,
};

/**
 * 根据contentType获取函数body的方法
 * 不同的contentType使用不同的parser，在contentTypeParser对象中配置
 * @param request 函数计算http请求对象
 */
export default (req: FcHttpRequest) =>
  new Promise((resolve, reject) => {
    getRawBody(req, (err, body) => {
      if (err) {
        reject(err);
      }
      const parser = contentTypeParserTable[req?.headers['content-type']];
      if (parser) {
        resolve(parser(body));
      }
      resolve(body);
    });
  });
