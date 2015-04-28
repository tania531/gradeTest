'use strict';

angular.module('poseidon')
.factory('Grade', function($rootScope, $firebaseObject, $firebaseArray){
  var fbGrades;
  var afGrades;

  function init(){
    fbGrades = $rootScope.fbRoot.child('courses/grades');
    afGrades = $firebaseArray(fbGrades);
    return afGrades;
  }

  function add(grade){
    return afGrades.$add(grade);
  }
  function save(course){
    return afCourses.$save(course);
  }

  return {add: add, init: init, save:save};

});
