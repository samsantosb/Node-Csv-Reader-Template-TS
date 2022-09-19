import { MongoRepository } from "./../repositories/mongo.repository";
import { fakePerson } from "./fake.persons";

export const fakeMongoRepository = {
  create: () => Promise.resolve(fakePerson[0]),
  delete: () => Promise.resolve(fakePerson[0]),
  getAll: () => Promise.resolve(fakePerson),
  getOne: () => Promise.resolve(fakePerson[0]),
  update: () => Promise.resolve(fakePerson[0]),
} as any as MongoRepository;
