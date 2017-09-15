angular.
    module('goodsApp').
    controller('goodsController', function ($scope){
        $scope.$on("openModalInfoGood", function (event, good){
             $scope.showModalInfo = true;
             $scope.selectedGood = good;
        })
        $scope.onClose = function (){
            $scope.showModalInfo = false;
        }
})