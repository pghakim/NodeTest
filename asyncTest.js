const fs = require("fs");
const util = require("util");
const readFile = (fileName) => util.promisify(fs.readFile)(fileName, "utf8");

(async () => {
  try {
    const file = "text.txt";
    console.log(await readFile(file));
  } catch (error) {
    console.error(error);
  }
})();
