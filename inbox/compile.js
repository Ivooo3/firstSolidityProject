const path = require("path"); //this will assure us that we aways generate the correct path in every env
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];
