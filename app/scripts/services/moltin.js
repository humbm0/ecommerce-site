angular.module('ecommerceSite2App.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'qU0rsviB8y88xfVuQsNoStJF4SpiJTHRlXKpzqDrtT'});
    moltin.Authenticate(function() {
    	deferred.resolve(moltin);
    });
    return deferred.promise;
  });
