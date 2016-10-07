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

var url = 'https://api.github.com';
var userInfo = url + '/users/frazierr2';
console.log(userInfo);


$.ajax(userInfo).then(userThumnail);

function userThumnail(data){
  console.log(data.avatar_url);
  // var planets = data.results;
  // var $planetContainer = $('#planet-list');
  //
  // var source = $('#plaent-template').html();
  // var template = Handlebars.compile(source);
  //
  // _.each(planets, function(planet){
  //   $planetContainer.append(template(planet));
  // });
}
