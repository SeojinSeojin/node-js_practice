const crypto = require("crypto");

// chipers : 지원하는 암호화 알고리즘 이름들의 배열 반환
const ciphers = crypto.getCiphers();
ciphers.forEach(element => {
    console.log(element);
})

const key = "seojinseojin";
const data = "서진서진";


// 암호화
const cipher = crypto.createCipher("aes-256-cbc", key);
let result = cipher.update(data, "utf8", "base64");
result += cipher.final("base64");

console.log("암호화된 문자열 :", result);


// 복호화
const decipher = crypto.createDecipher("aes-256-cbc", key);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");

console.log("복호화된 문자열 :", result2);