"use strict";

function FetchController($scope, $http, $templateCache) {
    $scope.url = "./hello2.html";
    $scope.fetch = function () {
        $http({method: 'GET', url: $scope.url, cache: $templateCache}).
            success(function (data, status) {
                $scope.status = status;
                $scope.data = data;
            }).error(function (data, status) {
                $scope.status = status;
                $scope.data = "Oh noes!";
            });
    };
}
