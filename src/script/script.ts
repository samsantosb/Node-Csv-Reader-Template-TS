import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

export async function script() {
  const url = process.env.MONGO as string;
  const client = new MongoClient(url);

  await client.connect();
  const db = client.db("test");
  const collection = db.collection("csv");
  //do a seed test
  await collection.insertOne({ name: "test" });
  //do a query test
  const result = await collection.findOne({ name: "test" });
  console.log(result);
  //close the connection
  await client.close();
  //log close
  console.log("closed");
}
