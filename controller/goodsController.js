angular.
  module('goodsApp').
    controller('goodsController', function ($scope) {
               $scope.openModalInfo = function(good) {
                $scope.showModalInfo = true;
                $scope.selectedGood = good;
                console.log(good)
               }
})