import { Db } from "mongodb";

export class MongoRepository {
  constructor(private readonly db: Db) {}
  async getAll(collection: string) {
    return this.db.collection(collection).find().toArray();
  }
  async getOne(collection: string, id: string) {
    return this.db.collection(collection).find({ _id: id }).toArray();
  }
  async create(collection: string, data: any) {
    return this.db.collection(collection).insertOne(data);
  }
}
