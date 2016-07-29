'use strict';

/**
 * @ngdoc function
 * @name ecommerceSite2App.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the ecommerceSite2App
 */
angular.module('ecommerceSite2App')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
