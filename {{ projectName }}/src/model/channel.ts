/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-19 16:22:42
 * @Description 渠道字典数据模型
 * @FilePath /fc-dict/src/model/channel.ts
 */
import { Schema, model } from 'mongoose';

const channelSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true, unique: true },
});

export default model('Channel', channelSchema);
