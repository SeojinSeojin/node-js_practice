const fs = require("fs");
// 파일에 데이터를 쓰고 읽는 기능을 제공하는 모듈

//비동기식
// 함수가 수행해야 하는 내용이 끝나지 않아도
// 다음 함수가 시행되도록 함
// 따라서 실행되는 순서와 결과가 나오는 순서는 같지 않다.

fs.writeFile("data.txt", "Life is so hard", function(error) {
    console.log("saved");
});

fs.readFile("data.txt", function(error, data) {
    console.log(data.toString()); //data는 버퍼에 저장됨
})

fs.appendFile("data.txt", "Cheer up~", function(error) {
    console.log("appended");
})

fs.readFile("data.txt", function(error, data) {
    console.log(data.toString());
})

//동기식
// 비동기의 반대
fs.writeFileSync("data2.txt", "Life is so hard");
const syncData = fs.readFileSync("data2.txt");
console.log(syncData.toString());
fs.appendFileSync("data2.txt", "Cheer up~");
const syncData2 = fs.readFileSync("data2.txt");
console.log(syncData2.toString());