const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async(userName) => {
    try {
        return await axios.get(`https://github.com/${userName}`);
    } catch (error) { console.error(error); }
};

getHtml("seojinseojin").then(html => {
    let commitList = [];
    const $ = cheerio.load(html.data);
    const $gList = $("svg.js-calendar-graph-svg").children("g").children("g");
    $gList.each(function(i, elem) {
        const $gListSub = $(this).children("rect");
        const commitListSub = []
        $gListSub.each(function(j, elem) {
            commitListSub[j] = {
                count: $(this).attr("data-count"),
                date: $(this).attr("data-date")
            }
        })
        commitList = commitList.concat(commitListSub)
    });
    return commitList;
}).then(res => console.log(res));