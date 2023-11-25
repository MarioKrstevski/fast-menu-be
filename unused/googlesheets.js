import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadsheetId = "10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps";
const spid2 = "1i8s74vfPOwOyckvrwzxXBE7j_-0LPJR2rGRgyfwNDWU";
const parser = new PublicGoogleSheetsParser(spid2);
parser.parse().then((items) => {
  console.log(items);
});
