/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 17:29:24
 * @Description 渠道相关服务方法
 * @FilePath /fc-dict/src/service/channel.ts
 */
import { connect } from '@/database/mongo';
import Channel from '@/model/channel';

export const queryOneChannel = async (code: number) => {
  await connect();
  const channel = await Channel.findOne({ value: code });

  if (channel !== null) {
    return {
      value: channel.get('value'),
      name: channel.get('name'),
    };
  }
  throw new Error(`Cannot find channel with value of ${code}`);
};

export const queryAllChannel = async () => {
  await connect();
  const channels = await Channel.find({});
  return channels.map(channel => ({
    value: channel.get('value'),
    name: channel.get('name'),
  }));
};
