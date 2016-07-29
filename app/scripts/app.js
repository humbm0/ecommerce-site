'use strict';

/**
 * @ngdoc overview
 * @name ecommerceSite2App
 * @description
 * # ecommerceSite2App
 *
 * Main module of the application.
 */
angular
  .module('ecommerceSite2App', [
    'ecommerceSite2App.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve: {
          categories: function($q, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(categories){
                deferred.resolve(categories);
              });
            })
            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        resolve: {
          category: function($q, $route, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category){
                deferred.resolve(category);
              });
            })
            return deferred.promise;
          },
          products: function($q, $route, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            })
            return deferred.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve:{
          product: function($q, $route, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product){
                deferred.resolve(product);
              });
            })
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth){
            return MoltinAuth;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart',
        resolve:{
          cart: function($q, $route, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Cart.Contents(function(cart) {
                  deferred.resolve(cart);
              }, function(error) {
                  // Something went wrong...
              });
            })
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth){
            return MoltinAuth;
          }
        }
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout',
        resolve:{
          checkout: function($q, $route, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Cart.Checkout(function(checkout) {
                  deferred.resolve(checkout);
              }, function(error) {
                  // Something went wrong...
              });
            })
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth){
            return MoltinAuth;
          }
        }
      })
      .when('/checkout/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'payment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
