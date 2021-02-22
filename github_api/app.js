var GitHub = require('github-api');

// no auth
var gh = new GitHub();

var seojinseojin = gh.getUser('seojinseojin');
console.log(seojinseojin)
seojinseojin.listStarredRepos(function(err, repos) {
    repos.forEach((repo) => {
        console.log(`" ${repo.name} " by  "${repo.owner.login}"`)
    })
});