/* global juke */
'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

  angular.extend($scope, PlayerFactory); // copy props from param2 to param1

  $scope.keyboardControls = function() {
    console.log(event.keyCode)
    console.log("Hey Ashley!!")
    if (event.keyCode === 32) $scope.toggle();
    if (event.keyCode === 39) $scope.next();
    if (event.keyCode === 37) $scope.previous();
  };

  $scope.toggle = function () {
    if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
    else PlayerFactory.resume();
  };

  $scope.getPercent = function () {
    return PlayerFactory.getProgress() * 100;
  };

  $scope.handleProgressClick = function (evt) {
    PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
  };

});
