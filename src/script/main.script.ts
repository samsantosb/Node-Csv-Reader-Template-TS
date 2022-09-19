import { MongoClient } from "mongodb";
import { config } from "dotenv";
import { MongoRepository } from "../repositories/mongo.repository";
import { MainService } from "../services/main.service";
import { csvData } from "./csv.script";
config();

export async function script() {
  const url = process.env.MONGO as string;
  const client = new MongoClient(url);
  const db = client.db("test");
  const csvCollection = "csv";
  console.log("Variaveis globais instanciadas");

  function factory() {
    const mongoRepository = new MongoRepository(db);
    const mainService = new MainService(mongoRepository);
    return mainService;
  }
  const service = factory();
  console.log("cama de serviços instanciada");

  await client.connect();
  console.log("conectado ao banco de dados");

  for (const item of csvData) {
    await service.create(csvCollection, item);
  }
  console.log("dados inseridos no banco de dados");

  //console.log(await service.getAll(csvCollection));

  await client.close();
  console.log("Conexão encerrada");
}
