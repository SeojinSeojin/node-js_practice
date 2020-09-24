const yargs = require("yargs");

yargs.version("1.0.0");
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(argv) {
        console.log(
            `Adding a new note : title - ${argv.title}, body - ${argv.body}`
        );
    },
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log("Removing the note");
    },
});

yargs.command({
    command: "list",
    describe: "List a new note",
    handler: function() {
        console.log("Listing a new note");
    },
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function() {
        console.log("Reading the note");
    },
});

console.log(yargs.argv);
yargs.parse();