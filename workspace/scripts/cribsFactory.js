angular
	.module('myApp')
	.factory('cribsFactory', function($http) {


		function getCribs() {
			return $http.get('http://35.190.186.160:8080/products');  // // TODO:  solv the cross origin problem 
		}

		function getChipTypes() {
			return $http.get('http://35.190.186.160:8080/categories');
		}

		return {
			getCribs : getCribs
		};
	});
