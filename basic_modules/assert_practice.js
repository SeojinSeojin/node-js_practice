const assert = require("assert");
// 코드를 동작시키기 전에 수식 및 데이터를 검사하고 
// 조건에 위배될 경우 프로그램을 중지시키는 모듈

const n1 = 10;
const n2 = 10;
const n3 = 20;
const s1 = "10";

assert(n1 < n3);
console.log("n1은 n3보다 작다");

/*
assert(n1 < n2);
console.log("n1은 n2보다 작다");
*/

/*
assert(n1 - n2);
console.log("n1-n2는 0이 아니다");
*/

assert.equal(n1, n2);
console.log("n1과 n2는 같다");

assert.equal(n1, s1);
console.log("n1과 s1은 같다");

assert.strictEqual(n1, s1);
console.log("n1과 s1은 자료형까지 같다");