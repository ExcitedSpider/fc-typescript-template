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
