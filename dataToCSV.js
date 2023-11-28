import fs from "fs";
import Papa from "papaparse";

function arrayToCsv(dataArray, filePath) {
  // Convert array of objects to CSV string
  const csvString = Papa.unparse(dataArray);

  // Write the CSV string to a file
  fs.writeFileSync(filePath, csvString, "utf-8");

  console.log(`CSV file saved to: ${filePath}`);
}

// Example usage
const data = [
  { Name: "John", Age: 30, City: "New York" },
  { Name: "Jane", Age: 25, City: "San Francisco" },
  // Add more objects as needed
];

const csvFilePath = "output.csv";

arrayToCsv(data, csvFilePath);
