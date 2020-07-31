const dns = require("dns");
// 지정된 도메인의 dns 정보(ip 주소 등)를 알아오는 모듈

dns.lookup("google.com", function(err, address, family) {
    console.log("ip주소 ?", address);
    console.log("ip 버전 ?", family);
});