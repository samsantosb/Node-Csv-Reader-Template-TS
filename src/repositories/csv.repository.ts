import fs from "fs";
import path from "path";
import readline from "readline";

const filePath = path.join(__dirname, "../data/file.csv");

function csvReader() {
  const text = fs.readFileSync(filePath, "utf8");
  const data = text.split("\r\n").filter((removeEmpties) => removeEmpties);
  console.log(data);
}
csvReader();
