ytwApp.controller('goodsControler',function($scope){


  $scope.records = [
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '1$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '2$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '3$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '4$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '5$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '6$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '7$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '8$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '9$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '10$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '11$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '12$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '13$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '14$' },
          {maker: 'Тульський молочний комбинат',
          product : 'Моцарула middle 100г (4 шарика)',
          oriented : 'орієнтовочная цена:',
          mony : '15$' }
        ]
});
console.log('2');
// ytwApp.controller('mainCtrl', function( $scope, $http){
//
//
//   $http.get('./menu.json')
//     .then(function(data){
//       $scope.menuObj = data;
//       pagination.setProducts( data.products );
//       $scope.products = pagination.getPageProducts( $scope.currentPage );
//       $scope.paginationList = pagination.getPaginationList();
//     }).catch(angular.noop);
//
//   $scope.showPage = function(page) {
//     if ( page == 'prev' ) {
//       $scope.products = pagination.getPrevPageProducts();
//     } else if ( page == 'next' ) {
//       $scope.products = pagination.getNextPageProducts();
//     } else {
//       $scope.products = pagination.getPageProducts( page );
//     }
//   }
//
//   $scope.currentPageNum = function() {
//     return pagination.getCurrentPageNum();
//   }
//
// })