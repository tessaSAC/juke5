juke.directive('footer', function() {
	return {
		restrict: 'E',
		controller: 'PlayerCtrl',
		// scope: {

		// },
		// link: function(scope) {
		// 	scope.play = function() {

		// 	};
		// 	scope.pause = function() {

		// 	};
		// },
		templateUrl: '/js/player/footer.template.html'
	};
});