process.argv.slice(2).forEach((arg, index) => 
  {
  console.log(`Argument ${index + 1}:${arg}`);
});

const [, , firstArg] = process.argv;
if (firstArg) {
  console.log(firstArg);
}

