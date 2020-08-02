// 경로와 관련한 작업을 수행하는 모듈
const path = require("path");

// 절대 경로
const basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1 :", basename1);

const basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 :", basename2);

// 상대 경로
const basename3 = path.basename("abc.txt");
console.log("basename3 :", basename3);

const dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 :", dirname1);

const dirname2 = path.dirname("abc.txt");
console.log("dirname2 :", dirname2);

// 확장자 이름
const extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 :", extname1);

const extname2 = path.extname("abc.txt");
console.log("extname2 :", extname2);

// 절대경로인지 판별
const isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");
console.log("isAbsolute1 :", isAbsolute1);
const isAbsolute2 = path.isAbsolute("abc.txt");
console.log("isAbsolute2 :", isAbsolute2);
const isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute3 :", isAbsolute3);

// join
const join = path.join("aaa", "bbb", "ccc.txt");
console.log("join :", join);

// normalize
const normalize = path.normalize("c:\\aaa\\..\\bbb\\ccc.txt");
console.log(normalize);