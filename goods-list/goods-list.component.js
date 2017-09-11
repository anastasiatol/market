angular.
  module('goodsApp').
  component('goodsList', {
    templateUrl: 'goods-list/goods-list.template.html',
    controller: ['$http', function goodsListController($http) {
        var self = this;
        $http.get('goods/goods.JSON').then(function(response){
            self.goods = response.data;
        })
    }
    ]
});
           