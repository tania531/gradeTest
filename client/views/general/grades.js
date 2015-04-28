'use strict';

angular.module('poseidon')
.controller('GradeCtrl', function($scope, Grade, $window){
  $scope.afGrades = Grade.init();

  $scope.addGrade = function(grade){
    // alert('call add class');

    var o = {
      score: grade.score,
      // test: grade.test,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Grade.add(o)
    .then(function(){
      $scope.grade = {};
    });

  };


});
