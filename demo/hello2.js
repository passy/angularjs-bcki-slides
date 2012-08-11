function HelloModelController($scope) {
    $scope.sayHello = function () {
        alert("Hallo, " + $scope.name + "!");
    };
}
