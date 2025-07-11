
const [, , firstArg] = process.argv;
if (firstArg) {
  console.log(firstArg || "");
}

if (process.argv[2] === undefined) {
    console.log("No argument");
}

