import { FcHttpRequest, FcHttpResponse } from './http';
import { FcContext, FcEvent, FcCallBack } from './context';

/**
 * HTTP入口触发器函数
 */
export type HttpTrigger = (
  req: FcHttpRequest,
  resp: FcHttpResponse,
  context: FcContext,
) => void;

/**
 * 普通API入口触发器函数
 */
export type ApiTrigger = (
  event: FcEvent,
  context: FcContext,
  callBack: FcCallBack,
) => void;

/**
 * initializer触发器函数
 */
export type InitializerTrigger = (
  context: FcContext,
  callBack: FcCallBack,
) => void;
