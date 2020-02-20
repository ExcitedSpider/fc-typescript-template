/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 16:22:17
 * @Description 示例控制器代码
 * @FilePath /fc-dict/src/controller/demo/index.ts
 */
import { Handler } from '@/types/http';

const demoHandler: Handler = (req, resp) => {
  resp.setHeader('content-type', 'application/json');
  resp.send(
    JSON.stringify({
      sucess: true,
      message: 'hello world',
    }),
  );
};

export default demoHandler;
