const fs = require("fs");
const getSystemInfo = require("./os-calls");

function readFile(filename) {
  try {
    const content = fs.readFileSync(filename, "utf-8");
    const jsonData = JSON.parse(content);
    console.log(jsonData);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

function writeNewFile(filename, content) {
  try {
    fs.writeFileSync(filename, content);
    console.log(`File ${filename} created successfully`);
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

// readFile("sample.txt");
// writeNewFile("output.txt", "Unicafe is the best in helsinki");

//optional task
// writeNewFile("system-info.txt", getSystemInfo.getOSInfo());

readFile("system-info.txt");
