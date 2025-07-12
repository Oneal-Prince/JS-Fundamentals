const x = parseInt(process.argv[2]);

if (isNaN(x)) {
    console.log("Please provide a valid number as the first argument.");
    process.exit(1);
}

for (let i = 0; i < x; i++) {
    console.log("C is fun");
}