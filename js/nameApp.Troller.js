angular.module('mainApp', [])
angular.module('mainApp')
	.controller('mainTroller', ['$scope', '$http', function ($scope, $http){

		$scope.sendEmail = function(){
			console.log($scope.email)
			$http.post('/send', $scope.email)
				.then(function(returnData){
					console.log(returnData)
					if(returnData.status !== 200) {
						alert("Sorry, there was an error. Please try again.")
					} else {
						alert("Your message has been sent!")
					}
				})
			$scope.email = {}
	};


	}])