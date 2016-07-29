'use strict';

/**
 * @ngdoc function
 * @name ecommerceSite2App.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the ecommerceSite2App
 */
angular.module('ecommerceSite2App')
  .controller('CartCtrl', function ($scope, cart, moltin, $route) {
    $scope.car = cart;
    console.log($scope.car);

    $scope.deleteCart = function(){
      moltin.Cart.Delete(function() {

        $route.reload();
      }, function(error) {
          // Something went wrong...
      });
    }
  });
