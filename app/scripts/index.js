var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  });
}
// ****************************************************************

var url = 'https://api.github.com';
var userInfo = url + '/users/frazierr2';
// console.log(userInfo);

$.ajax(userInfo).then(userSection);

// **********USER INFO**********************************************
function userSection(data){
  var userDetails = data;
  // console.log(userDetails);
  var source = $('#left-section').html();
  var template = Handlebars.compile(source);
  // console.log(source);
  var $infoContainer = $('#left-side');
  $infoContainer.append(template(userDetails));
}

// **********REPOS SECTION********************************************

var repoListing = url + '/users/frazierr2/repos';
// console.log(repoListing);

$.ajax(repoListing).then(fetchRepoListing);

function fetchRepoListing(data){
var repoData = data;
// console.log(repoData);
var source = $('#right-section').html();
var template = Handlebars.compile(source);
// **************SORTED ARRAY REVERSED************
var sortedArray = _.sortBy(data,'created_at').reverse();
    // console.log(sortedArray);

var $repoContainer = $('#right-side');
_.each(sortedArray,function(info){
    var repoDisplay = $(template(info));
    $repoContainer.append(repoDisplay);
  });
}

// **************************STARGAZER SECTION-REPO******************************
var stargazer = url + '/users/frazierr2/starred';
console.log(stargazer);
