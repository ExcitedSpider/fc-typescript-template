/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 16:59:31
 * @Description mongo连接
 * @FilePath /fc-dict/src/database/mongo.ts
 */
import mongoose from 'mongoose';
import CONFIG from '@/config';
import { FcHttpRequest, FcHttpResponse } from '@/types/http';

const { DB_CONNECTION } = CONFIG;

const connectDb = () => {
  mongoose.connect(
    `mongodb://${DB_CONNECTION.username}:${DB_CONNECTION.password}@${DB_CONNECTION.server}:${DB_CONNECTION.port}/${DB_CONNECTION.database}`,
    {
      bufferCommands: false,
    },
  );

  return mongoose;
};

export const connect: () => Promise<mongoose.Connection> = () => {
  const { connection } = connectDb();
  return new Promise((resolve, reject) => {
    connection.once('open', () => resolve(connection));
    connection.on('error', error => {
      reject(error);
    });
  });
};

export default connectDb;
