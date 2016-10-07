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

$.ajax(userInfo).then(userSection);

// **********USER INFO**********
function userSection(data){
  var userDetails = data;
  console.log(userDetails);
  var source = $('#left-section').html();
  var template = Handlebars.compile(source);
  // console.log(source);
  var $infoContainer = $('#left-side');
  $infoContainer.append(template(userDetails));
}



  // function getUserInfo(data){
  // var userInfo = data;
  // var $profileBar = $('#profile-bar');
  // console.log(data);
  //
  // var source = $('#profile-template').html();
  // var template = Handlebars.compile(source);
  //
  // $profileBar.append(template(userInfo));
