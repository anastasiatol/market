angular.
    module('goodsApp').
    controller('goodsController', function ($scope){
         $scope.$on("openModalInfoGood", function (event, good){
             $scope.showModalInfo = true;
             console.log(good);
             console.log($scope.showModalInfo);
             $scope.selectedGood = good;
         })       
})