'use strict';

angular.module('yoangularApp')
.controller('HighlightCtrl', function ($scope, $location) {
	/*General main highlighting*/
	$scope.isActive = function (ngClassURL, position) {

		var urlString = $location.path().split("/");
		var ngClassString = ngClassURL.split("/");
		var compareEquals = (ngClassString[1] == urlString[position]);

		$scope.compareEquals = compareEquals;
		return compareEquals;
	};
});