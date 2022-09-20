import { MongoRepository } from "../repositories/mongo.repository";
export class MainService {
  constructor(private readonly mongoRepository: MongoRepository) {}

  async getAll(collection: string) {
    try {
      const result = await this.mongoRepository.getAll(collection);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(collection: string, id: string) {
    try {
      const result = await this.mongoRepository.getOne(collection, id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async create(collection: string, data: any) {
    try {
      const result = await this.mongoRepository.create(collection, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
