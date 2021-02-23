require("dotenv").config();

var GitHub = require('github-api');

// no auth


var noAuth = new GitHub();
var seojinseojin = noAuth.getUser('seojinseojin');
seojinseojin.listStarredRepos(function(err, repos) {
    repos.forEach((repo) => {
        console.log(`" ${repo.name} " by  "${repo.owner.login}"`)
    })
});

const ghrepos = require("ghrepos");
const authOptions = { use: "seojinseojin", token: process.env.PAT }


ghrepos.listUser(authOptions, "seojinseojin", (err, repolist) => {
    repolist.forEach((repo) => {
        console.log(`${repo.name} - ${repo.description} by  ${repo.owner.login}, ${repo.language}`);
    })
})

ghrepos.listUser(authOptions, "seojinseojin", (err, repolist) => {
    repolist.forEach((repo) => {
        ghrepos.listCommits(authOptions, "seojinseojin", repo.name, (err, refData) => {
            console.log(`\nRepository : ${repo.name} by ${repo.owner.login}`)
            refData.forEach((ref) => {
                console.log(`${ref.commit.author.date}\n${ref.commit.committer.name} committed : ${ref.commit.message}`)
            })
        })
    })
})

ghrepos.listUser(authOptions, "seojinseojin", (err, repolist) => {
    repolist.forEach((repo) => {
        console.log(`${repo.name} - ${repo.languages_url}`);
    })
})