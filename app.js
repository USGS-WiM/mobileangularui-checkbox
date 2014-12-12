"use strict";

angular.module("angular-bootstrap-checkbox-test", ['mobile-angular-ui', 'ui.checkbox']).controller("index", function($scope) {
	$scope.checkboxModel = [
		false, false, false,false, false, false, false, false, true, false, true
	];

	$scope.changes = 0;
	$scope.onChange = function() {
		$scope.changes++;
	};

	$scope.isDisabled = false;
});