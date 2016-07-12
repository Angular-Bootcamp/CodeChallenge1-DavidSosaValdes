(function() {
	var app = angular.module('pokedexApp', ['angular.filter']);
	
	app.controller('pokedexEntryController', function($scope, $http, $log){
		$scope.pokemon = {};

		$http.get('data/pokedex.json').success(function(data){
			$scope.pokemon = data[0];
		});

	});
})();