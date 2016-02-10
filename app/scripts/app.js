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
    'ngSails'
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
      .when('/dashboard',{
        templateUrl: "views/home.html",
        controller: "DashboardController",
        resolve: {
          auth: ["$q", "$window", function($q, $window) {
            var userInfo = $window.sessionStorage["userInfo"];

            if (userInfo) {
              return $q.when(userInfo);
            } else {
              return $q.reject({ authenticated: false });
            }
          }]
        }
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
