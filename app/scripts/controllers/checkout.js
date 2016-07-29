'use strict';

/**
 * @ngdoc function
 * @name ecommerceSite2App.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the ecommerceSite2App
 */
angular.module('ecommerceSite2App')
  .controller('CheckoutCtrl', function ($scope, checkout, moltin) {
    $scope.items = checkout.cart.contents;
    // console.log($scope.items);
    // console.log(checkout);

    $scope.createOrder = function() {
      // console.log($scope.data);

      var order = moltin.Cart.Complete({
        gateway: 'dummy',
        customer: {
          first_name: 'Jon',
          last_name:  'Doe',
          email:      'jon.doe@gmail.com'
        },
        bill_to: {
          first_name: 'Jon',
          last_name:  'Doe',
          address_1:  '123 Sunny Street',
          address_2:  'Sunnycreek',
          city:       'Sunnyvale',
          county:     'California',
          country:    'US',
          postcode:   'CA94040',
          phone:      '6507123124'
        },
        ship_to: 'bill_to',
        shipping: '1305214549095350548'
      });
      console.log(order);

      var checkout = moltin.Checkout.Payment('purchase', order.id, {
        data: {
          number:       '4242424242424242',
          expiry_month: '02',
          expiry_year:  '2017',
          cvv:          '123'
        }
      });

      // var billTo = {
      //   first_name: $scope.data.billing_first_name,
      //   last_name:  $scope.data.billing_last_name,
      //   address_1:  $scope.data.address,
      //   city:       $scope.data.city,
      //   county:     $scope.data.county,
      //   country:    $scope.data.country,
      //   postcode:   $scope.data.postcode,
      //   phone:      $scope.data.phone
      // };
      // var customer = {
      //   first_name: $scope.data.first_name,
      //   last_name:  $scope.data.last_name,
      //   email:      $scope.data.email
      // }
      // return moltin.Cart.Complete({
      //   customer: customer,
      //   shipping: '1305214549095350548',
      //   gateway: 'dummy',
      //   bill_to: billTo,
      //   ship_to: 'bill_to'
      // }, function(order) {
      //      console.log(order);
      //  }, function(error) {
      //     console.log(error);
      // });
    };
  });
