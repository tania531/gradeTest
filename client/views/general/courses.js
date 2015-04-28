'use strict';

angular.module('poseidon')
.controller('CourseCtrl', function($scope, $rootScope, Course, $window){
  $rootScope.afCourses = Course.init();

  $scope.addCourse = function(course){
    // alert('call add class');

    var o = {
      title: course.title,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Course.add(o)
    .then(function(){
      $scope.course = {};
    });

  };

  $scope.deleteCourse = function(course){
    Course.destroy(course);
  };

  $scope.editCourse = function(course){
    $scope.course = course;
  };
  $scope.updateCourse = function(course){
    $scope.course = {};
    course.save(course);
  };
});
