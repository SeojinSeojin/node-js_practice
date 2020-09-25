const fs = require("fs");

const writeJSON = () => {
    const book = {
        title: "WRITE ON",
        author: "SKKU Press",
    };
    const bookJSON = JSON.stringify(book);
    fs.writeFileSync("1-json.json", bookJSON);
};

const readJSON = () => {
    const dataBuffer = fs.readFileSync("1-json.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    console.log(data.title);
};

//writeJSON();

readJSON();