import { MongoClient } from "mongodb";
import { config } from "dotenv";
import { MongoRepository } from "../repositories/mongo.repository";
import { MainService } from "../services/main.service";
config();

export async function script() {
  const url = process.env.MONGO as string;
  const client = new MongoClient(url);
  const db = client.db("test");
  const csv = "csv";
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

  const result = await service.getAll(csv);
  console.log(result);
  console.log("dados obtidos");

  await client.close();
  console.log("Conexão encerrada");
}
