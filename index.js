//sets up a new module
angular.module('TestApp', []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc($scope) {
    $scope.list = [{ name: "Number", position: "priority", done: true }, { name: "Numeral", position: "not a priority", done: true }, { name: "Alphabet", position: "not a priority", done: false }, { name: "Alphanum", position: "priority", done: true }];
    $scope.addData = () => {
        $scope.list.push({
            name: $scope.name,
            position: $scope.position,
            done: false
        });
        $scope.name = '';
        $scope.position = '';
    }
    $scope.getTotal = function() {
        return $scope.list.length;
    };
    $scope.clearCompleted = function() {
        $scope.list = $scope.list.filter($scope.list, function(item) {
            return !item.done;
        });
    };
}
//  service 
angular.module("TestApp").service('Posts', function() {
    this.getAll = function() {
        return [{ title: "Service1" },
            { title: "Post no 2" },
            { title: "Last post" }
        ];
    };
});
angular.module("TestApp").controller("serviceCtrl", function($scope, Posts) {
    $scope.posts = Posts.getAll();
});

// factory
angular.module("TestApp").factory("listService", function() {
    var factory = {};
    factory.deduct = function(value) {
        return value - 1;
    };
    return factory;
});

angular.module("TestApp").controller("factoryController", function($scope, listService) {
    listService.deduct($scope.getTotal);
});

// custom filter