angular.module('AngularFactory.controllers.Main', [])

    .controller('MainController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
        $scope.who = 'World';
    }]);
