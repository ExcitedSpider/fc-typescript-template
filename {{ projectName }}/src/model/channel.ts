/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-20 16:14:58
 * @Description 渠道字典数据模型
 * @FilePath /fc-demo/src/model/channel.ts
 */
import {
  Schema, model, Model, Document,
} from 'mongoose';

const channelSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true, unique: true },
});

export type ChannelModel = Model<Document, {}>;
const channelModel: ChannelModel = model('Channel', channelSchema);

export default channelModel;
