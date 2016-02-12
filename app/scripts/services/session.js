'use strict';

/**
 * @ngdoc service
 * @name potatoApp.Session
 * @description
 * # Session
 * Service in the potatoApp.
 */
angular.module('potatoApp')
  .service('Session', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.create = function (sessionToken, userEmail) {
      this.token = sessionToken;
      this.userEmail = userEmail;
    };
    this.destroy = function () {
      this.token = null;
      this.userEmail = null;
    };
    return this;
  });
