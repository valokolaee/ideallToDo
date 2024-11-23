import Realm, { BSON } from 'realm';

export default class Task extends Realm.Object<Task> {

  _id: BSON.ObjectId = new BSON.ObjectId();

  parentTaskId?: string;
  title?: string;
  description?: string;
  createDate?: Date;
  deadLine?: Date;
  startDate?: Date;
  metaPictureId?: string;
  afterTask?: string;
  priority?: string;
  estimateTimeRequired?: string;

  totalSubTasks?: number;
  doneSubTasks?: number;


  done?: boolean;
  doneDate?: string;

  deleted?: boolean;
  uuid?: string;

  static primaryKey = '_id';
}

