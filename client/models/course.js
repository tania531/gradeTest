'use strict';

angular.module('poseidon')
.factory('Course', function($rootScope, $firebaseObject, $firebaseArray){
  var fbCourses;
  var afCourses;

  function init(){
    fbCourses = $rootScope.fbRoot.child('courses');
    afCourses = $firebaseArray(fbCourses);
    return afCourses;
  }

  function add(course){
    return afCourses.$add(course);
  }

  function destroy(course){
    return afCourses.$remove(course);
  }

  return {add: add, init: init, destroy:destroy};

});
