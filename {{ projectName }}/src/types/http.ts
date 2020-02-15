import { Readable } from 'stream';
import { IncomingMessage, ServerResponse } from 'http';

/**
 * HTTP触发器中的请求类
 */
export interface FcHttpRequest extends IncomingMessage {
  headers: { [index: string]: string };
  path: string;
  queries: { [index: string]: string };
  method: string;
  clientIP: string;
  url: string;
  /** body属性是解析后加上的，本身无 */
  body: any;
}

/**
 * HTTP触发器中的响应类
 */
export interface FcHttpResponse extends ServerResponse {
  setStatusCode: (statusCode: number) => void;
  setHeader: (headerKey: string, headerValue: string) => void;
  deleteHeader: (headerKey: string) => void;
  send: (body: Buffer | Readable | string) => void;
}

/** 中間件 */
export type MiddleWare = (
  req: FcHttpRequest,
  resp: FcHttpResponse,
  next: (error?: Error) => void,
) => void;

/** 请求处理器 */
export type Handler = (
  req: FcHttpRequest,
  resp: FcHttpResponse,
) => void;
