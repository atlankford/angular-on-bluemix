var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.scopeVariable = "this is a Scope Variable";
});