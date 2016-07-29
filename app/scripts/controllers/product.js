'use strict';

/**
 * @ngdoc function
 * @name ecommerceSite2App.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the ecommerceSite2App
 */
angular.module('ecommerceSite2App')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.prod = product;
    console.log(product);

    $scope.addStatus = null;
    $scope.addCart = function(){
      $scope.addStatus = "Adding...";
      moltin.Cart.Insert(product.id, 1, null, function(){
        $scope.addStatus = "Success";
        $scope.$apply();
        $timeout(function(){
          $scope.addStatus = null;
        }, 1000);
      });
    }
  });
