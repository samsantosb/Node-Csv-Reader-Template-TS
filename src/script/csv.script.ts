import { Console } from "console";
import fs from "fs";
import path from "path";

function csvDataFormated() {
  const filePath = path.join(__dirname, "../data/file.csv");
  const text = fs.readFileSync(filePath, "utf8");
  const data = text.split("\r\n").filter((removeEmpties) => removeEmpties);

  //make a subset of three items, since each person is composed by three items
  const subsetOfThree: Array<string[]> = [];
  while (data.length) {
    subsetOfThree.push(data.splice(0, 3));
  }

  //format the subset, removing :, empty spaces etc
  const formatedSubset = subsetOfThree.map((item: Array<string>) => {
    return item.map((item: string) => {
      return item.replace(/.*:/, "").trim();
    });
  });

  //transform the subset into an object ready to be inserted into the database
  const csvAsJsObject = formatedSubset.map((item: Array<string>) => {
    const [nome, idade, cep] = item;
    return { nome, idade, cep };
  });

  return csvAsJsObject;
}

type csv = {
  nome: string;
  idade: string;
  cep: string;
}[];

export const csvData: csv = csvDataFormated();
