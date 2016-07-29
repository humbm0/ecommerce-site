'use strict';

/**
 * @ngdoc function
 * @name ecommerceSite2App.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the ecommerceSite2App
 */
angular.module('ecommerceSite2App')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.cat = category;
    $scope.products = products;

    console.log(category);
  });
