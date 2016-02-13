'use strict';

/**
 * @ngdoc overview
 * @name potatoApp
 * @description
 * # potatoApp
 *
 * Main module of the application.
 */
angular
  .module('potatoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart',
    'ngSails',
    'ngStorage'
  ])
  .config(function ($routeProvider, $httpProvider, $sailsProvider) {
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/logout', {
        resolve: {
          logout: ['Auth', function (Auth){
              Auth.logout();
          }]
        },
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        data:{
          role: 'user'
        }
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/admin/users', {
        templateUrl: 'views/admin/users.html',
        controller: 'AdminUsersCtrl',
        controllerAs: 'admin/users'
      })
      .when('/admin/products', {
        templateUrl: 'views/admin/products.html',
        controller: 'AdminProductsCtrl',
        controllerAs: 'admin/products'
      })
      .otherwise({
        redirectTo: '/'
      });

      // $httpProvider.defaults.useXDomain = true;
      // delete $httpProvider.defaults.headers.common['X-Requested-With'];

      // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
      // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      // $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PUT,HEAD,DELETE,OPTIONS';

      $sailsProvider.url = 'http://localhost:1337';

  });

  /**
   * Frontend application run hook configuration. This will attach auth status
   * check whenever application changes URL states.
   */
angular.module('potatoApp')
    .run(function ($rootScope, Auth, $window) {
        /**
         * Route state change start event, this is needed for following:
         *  1) Check if user is authenticated to access page, and if not redirect user back to login page
         */
        $rootScope.$on('$routeChangeStart', function (event, next) {
          if (next.data) {
            if (!Auth.isAuthorized(next.data.role)) {
              event.preventDefault();
              // A Message Service ?
              window.location = '#/login';
            }
          }
        });

    });
