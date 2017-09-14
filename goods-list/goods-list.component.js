angular.
  module('goodsApp').
  component('goodsList', {
    templateUrl: 'goods-list/goods-list.template.html',
    controller: ['$http', '$scope', function goodsListController($http, $scope) {
        var self = this;
        $http.get('goods/goods.JSON').then(function(response){
            self.goods = response.data;
        })
        
        $scope.openModalInfo = function(good){
            $scope.$emit('openModalInfoGood', good)
        }
    }
    ]
});
           