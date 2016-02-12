'use strict';

/**
 * @ngdoc service
 * @name potatoApp.Auth
 * @description
 * # Auth
 * Factory in the potatoApp.
 */
angular.module('potatoApp')
  .factory('Auth', function ($sessionStorage, $location) {
    // Public API here
    return {
      logout: function () {
        $sessionStorage.$reset();

        $location.path( "/" );
      },

      isAuthenticated: function () {
        return Boolean($sessionStorage.user);
      },

      isAuthorized: function (role) {
        // Access Level Admin or User or None.
        if (role === 'user') {
          return this.isAuthenticated();
        } else if (role === 'admin') {
          return this.isAuthenticated() && Boolean($sessionStorage.user.user.role === 'admin');
        } else {
          return False;
        }
      }
    };
  });
