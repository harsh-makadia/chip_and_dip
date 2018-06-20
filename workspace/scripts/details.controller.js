angular
    .module('myApp')
    .controller('detailsController', function($scope, cribsFactory) {
        
        cribsFactory.getCribs().success(function(data) {
            $scope.crib = data;
        }).error(function(error) {
            console.log(error);
        });
        
    });