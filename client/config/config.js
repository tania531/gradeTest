'use strict';

angular.module('poseidon')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller:'CourseCtrl'})
  .state('grades', {url: '/grades', templateUrl: '/views/general/grades.html', controller:'GradeCtrl'})
  .state('courses', {url: '/courses', templateUrl: '/views/general/courses.html', controller:'CourseCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
