import fs from "fs";
import path from "path";

export function csvDataFormated() {
  const filePath = path.join(__dirname, "../data/file.csv");
  const text = fs.readFileSync(filePath, "utf8");
  const data = text.split("\r\n").filter((removeEmpties) => removeEmpties);

  //make a subset of three items, since each person is composed by three items
  const subsetOfThree: any = [];
  while (data.length) {
    subsetOfThree.push(data.splice(0, 3));
  }

  //format the subset, removing :, empty spaces etc
  const formatedSubset = subsetOfThree.map((item: any) => {
    return item.map((item: any) => {
      return item.replace(/.*:/, "").trim();
    });
  });

  //transform the subset into an object ready to be inserted into the database
  const csvAsJsObject = formatedSubset.map((item: any) => {
    const [nome, idade, cep] = item;
    return { nome, idade, cep };
  });

  return csvAsJsObject;
}
