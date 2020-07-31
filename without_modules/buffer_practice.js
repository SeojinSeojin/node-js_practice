// 메모리를 동적으로 할당할 수 있는 모듈
// 별도로 require()할 필요 없이 사용 가능

// alloc : 지정된 byte만큼의 메모리 공간이 0으로 초기화됨
const buf1 = Buffer.alloc(10);
console.log("alloc() ->", buf1);

// allocUnsafe : 지정된 byte만큼의 메모리 공간이 생성되지만 0으로 초기화되지 않는다.
const buf2 = Buffer.allocUnsafe(10);
console.log("allocUnsafe() ->", buf2);

// 버퍼의 byte 수를 알아내는 함수들
console.log("size :", Buffer.byteLength(buf1));
console.log("byte :", buf1.length);

// from : 지정된 값을 관리하는 메모리 공간 생성
// (주로) 한 글자당 영어는 1byte, 한국어는 3byte씩
const buf3 = Buffer.from("abcdefg");
console.log("<buf3>", buf3);
const buf4 = Buffer.from("진진자라");
console.log("<buf4>", buf4);

// copy : 복사하기
const buf5 = Buffer.alloc(5);
buf3.copy(buf5, 0, 1, 5);
console.log("copy from", buf3, ", index 1 to 4");
console.log("->", buf5);

// equals : 같은지 확인하기
const buf6 = Buffer.from("aaaaaaa");
const buf7 = Buffer.from("aaaaaaa");
console.log("buf6 is equal to buf7 ?", buf6.equals(buf7));
console.log("buf5 is equal to buf7 ?", buf5.equals(buf7));

// fill : 채우기
console.log(buf7.fill('c'));
console.log(buf7.fill("abc"));

// includes : 포함되어있는지 확인하기
console.log("buf6 includes aa ?", buf6.includes("aa"));
console.log("buf7 includes aa ?", buf7.includes("aa"));

// indexOf : 인덱스 번호 얻기
console.log("index of 'b' in 'abcabca' ?", buf7.indexOf('b'));
console.log("index of 'd' in 'abcabca' ?", buf7.indexOf('d'));
console.log("index of last 'b' in 'abcabca' ?", buf7.lastIndexOf('b'));

// toString : 문자열로 만들기
const b7_string = buf7.toString();
console.log("stringified buf7 ?", b7_string);