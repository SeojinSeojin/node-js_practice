const cluster = require("cluster");
// 병렬처리를 하기 위한 모듈

cluster.schedulingPolicy = cluster.SCHED_RR;
// Round Robbin 방식으로 하나의 worker에 하나씩 일을 부여하여
// 병렬처리를 보장

if (cluster.isMaster == true) { //false라면 병렬처리되지 못함

    cluster.fork();
    cluster.fork();
    cluster.fork();

    cluster.on("online", function(worker) {
            for (let i = 0; i < 10; i++) {
                console.log(worker.process.pid, "동작");
            }
        }) // online이라는 사건이 발생했을 때 호출되는 함수

}