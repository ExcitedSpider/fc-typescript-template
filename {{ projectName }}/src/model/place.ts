/*
 * @Author qyfeng
 * @LastEditors qyfeng
 * @LastEditTime 2020-02-20 16:48:16
 * @Description 地区数据模型
 * @FilePath /fc-demo/src/model/place.ts
 */
import {
  Schema, model, Model, Document,
} from 'mongoose';

const placeScheme = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true, unique: true },
});

export type PlaceModel = Model<Document, {}>;
const placeModel: PlaceModel = model('Place', placeScheme);

export default placeModel;
