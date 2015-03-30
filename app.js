var app = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
]);
  
app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  
  $stateProvider.state('customers', {
    url: "/customers",
    views: {
      "customersView": {
        templateUrl: "customers.html"
      }
    }
  });
  
  $stateProvider.state('orders', {
    url: "/orders",
    views: {
      "ordersView": {
        templateUrl: "orders.html"
      }
    }
  });
  
   $stateProvider.state('settings', {
    url: "/settings",
    views: {
      "settingsView": {
        templateUrl: "settings.html"
      }
    }
   });
  
});

app.controller('Accordion', ['$scope', '$stateParams', '$state',
  function($scope, $stateParams, $state) {
    
  }
]);
