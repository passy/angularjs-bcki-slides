"use strict";

function HelloMultipleController($scope) {
    $scope.entities = [];

    $scope.sayHello = function () {
        $scope.entities = ["Kiel", "Barcamp", "AngularJS"];
    };
}
