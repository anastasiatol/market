angular.
    module('goodsApp').
    directive('modalInfo', function () {
        return {
        templateUrl: 'modal/modal-window-info.html',
        restrict: "E",
        transclude: true,
        controller: ['$scope', function ($scope){
            
        }]
    }
})