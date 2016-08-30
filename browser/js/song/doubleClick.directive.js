juke.directive('doubleClick', function() {
	return {
		restrict: 'A',
		scope: {
			runUserExpression: '&doubleClick' // doubleClick: '&'
		},
		link: function (scope, element) {
			element.on('dblclick', function() {
				scope.runUserExpression(); // scope.doubleClick();
			});
		}
	};
});