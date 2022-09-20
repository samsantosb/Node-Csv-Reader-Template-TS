import { Db, ObjectId } from "mongodb";

export class MongoRepository {
  constructor(private readonly db: Db) {}
  async getAll(collection: string) {
    return this.db.collection(collection).find().toArray();
  }
  async getOne(collection, id) {
    return this.db.collection(collection).findOne({ _id: new ObjectId(id) });
  }
  async create(collection: string, data: any) {
    return this.db.collection(collection).insertOne(data);
  }
}
