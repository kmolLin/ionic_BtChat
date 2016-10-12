 var app=angular.module('starter',['ionic']);
app.controller('controller',function($scope){
  $scope.colors = colors;
  $scope.myColor = 0;
});

var colors=[
  {name:'red', value:0},
  {name:'blue', value:1},
  {name:'black', value:2}
];
